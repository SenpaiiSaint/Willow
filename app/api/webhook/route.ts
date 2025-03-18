// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentId, status } = body;

    if (!paymentId || !status) {
      return NextResponse.json(
        { error: "Missing paymentId or status in request body" },
        { status: 400 }
      );
    }

    const validStatus = ["PENDING", "COMPLETED", "FAILED"];
    if (!validStatus.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    // Update the payment status based on webhook notification
    const payment = await prisma.rentPayment.update({
      where: { id: paymentId },
      data: { status },
    });

    // If the payment is now COMPLETED and it's linked to an invoice, update the invoice accordingly.
    if (status === "COMPLETED" && payment.invoiceId) {
      const invoice = await prisma.invoice.findUnique({
        where: { id: payment.invoiceId },
      });

      if (invoice) {
        const newPaidAmount =
          invoice.paidAmount.toNumber() + payment.amount.toNumber();
        const updatedStatus =
          newPaidAmount >= invoice.amount.toNumber() ? "PAID" : invoice.status;

        await prisma.invoice.update({
          where: { id: invoice.id },
          data: {
            paidAmount: { increment: payment.amount },
            status: updatedStatus,
          },
        });
      }
    }

    return NextResponse.json(payment, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error processing webhook:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error processing webhook:', error);
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
