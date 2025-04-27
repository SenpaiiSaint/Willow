// app/api/webhook/route.ts
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

// Force truly dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Zod schema for webhook payload
const webhookSchema = z.object({
  paymentId: z.string().uuid(),
  status: z.enum(["PENDING", "COMPLETED", "FAILED"]),
});

export async function POST(request: NextRequest) {
  let payload;
  try {
    payload = webhookSchema.parse(await request.json());
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("Invalid webhook payload:", err.errors);
      return NextResponse.json(
        { error: "Invalid payload", details: err.errors },
        { status: 400 }
      );
    }
    throw err;
  }

  try {
    const updatedPayment = await prisma.$transaction(async (tx: PrismaClient) => {
      // 1️⃣ Update payment status
      const payment = await tx.rentPayment.update({
        where: { id: payload.paymentId },
        data: { status: payload.status },
        include: {
          invoice: {
            select: {
              id: true,
              amount: true,
              paidAmount: true,
              status: true,
            },
          },
        },
      });

      // 2️⃣ If completed and linked to an invoice, bump its paidAmount & maybe mark PAID
      if (payload.status === "COMPLETED" && payment.invoice) {
        const inv = payment.invoice;
        // invoice.amount & paidAmount are Decimal instances
        const newPaid = inv.paidAmount.plus(payment.amount);
        const newStatus =
          newPaid.gte(inv.amount) ? "PAID" : inv.status;

        await tx.invoice.update({
          where: { id: inv.id },
          data: {
            paidAmount: { set: newPaid },
            status: newStatus,
          },
        });
      }

      return payment;
    });

    return NextResponse.json(updatedPayment, { status: 200 });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
