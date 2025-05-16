// app/api/webhook/route.ts
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { PrismaClient, Prisma } from '@prisma/client';

// truly dynamic, no cache
export const dynamic = "force-dynamic";
export const revalidate = 0;

//–– Schemas & shared include

const webhookSchema = z.object({
  paymentId: z.string().uuid(),
  status: z.enum(["PENDING", "COMPLETED", "FAILED"]),
});

//–– Shared Prisma include definitions
const paymentInclude: Prisma.PaymentInclude = {
  invoice: {
    select: {
      id: true,
      amount: true,
      paidAmount: true,
      status: true,
    },
  },
};

//–– Error utilities

class ApiError extends Error {
  status: number;
  details?: unknown;
  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

function handleError(err: unknown) {
  if (err instanceof ApiError) {
    return NextResponse.json(
      { error: err.message, details: err.details },
      { status: err.status }
    );
  }
  if (err instanceof z.ZodError) {
    return NextResponse.json(
      { error: "Invalid payload", details: err.errors },
      { status: 400 }
    );
  }
  console.error("Unexpected error:", err);
  return NextResponse.json(
    { error: "Internal Server Error" },
    { status: 500 }
  );
}

//–– Handler

export async function POST(request: NextRequest) {
  let data: z.infer<typeof webhookSchema>;

  try {
    data = webhookSchema.parse(await request.json());
  } catch (err) {
    return handleError(err);
  }

  try {
    const updatedPayment = await prisma.$transaction(async (tx: Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends">) => {
      // 1️⃣ Update payment status
      const payment = await tx.payment.update({
        where: { id: data.paymentId },
        data: { status: data.status },
        include: paymentInclude,
      });

      // 2️⃣ If COMPLETED and linked to invoice, bump paidAmount & update invoice status
      if (data.status === "COMPLETED" && payment.invoice) {
        const inv = payment.invoice;
        const newPaid = inv.paidAmount + payment.amount;
        const newStatus = newPaid >= inv.amount ? "PAID" : inv.status;

        await tx.invoice.update({
          where: { id: inv.id },
          data: {
            paidAmount: newPaid,
            status: newStatus,
          },
        });
      }

      return payment;
    });

    return NextResponse.json(updatedPayment);
  } catch (err) {
    return handleError(err);
  }
}
