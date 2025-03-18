// app/services/paymentService.ts
import prisma from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";

export async function processPayment(tenantId: number, amount: number) {
  // Find the first unpaid invoice for the tenant
  let invoice = await prisma.invoice.findFirst({
    where: {
      tenantId,
      status: 'UNPAID',
    },
    orderBy: { dueDate: 'asc' },
  });

  // If no invoice exists, create a dummy invoice for testing purposes.
  if (!invoice) {
    invoice = await prisma.invoice.create({
      data: {
        tenantId,
        amount: new Decimal(1000), // Default invoice amount for testing
        paidAmount: new Decimal(0),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
        status: 'UNPAID',
      },
    });
  }

  // Create a payment record with status PENDING.
  const payment = await prisma.rentPayment.create({
    data: {
      tenantId,
      amount: new Decimal(amount),
      status: 'PENDING',
      invoiceId: invoice.id,
    },
  });

  // Update the invoice with the payment amount.
  const currentPaid = invoice.paidAmount.toNumber();
  const newPaidAmount = currentPaid + amount;
  const invoiceAmount = invoice.amount.toNumber();
  const updatedStatus = newPaidAmount >= invoiceAmount ? 'PAID' : 'UNPAID';

  await prisma.invoice.update({
    where: { id: invoice.id },
    data: {
      paidAmount: { increment: new Decimal(amount) },
      status: updatedStatus,
    },
  });

  // Simulate asynchronous settlement (e.g., confirmation from a payment gateway)
  setTimeout(async () => {
    try {
      await prisma.rentPayment.update({
        where: { id: payment.id },
        data: { status: 'COMPLETED' },
      });
    } catch (error) {
      console.error("Error completing payment settlement:", error);
    }
  }, 2000);

  return payment;
}
