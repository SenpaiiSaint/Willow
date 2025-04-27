// app/services/paymentService.ts
import prisma from "@/lib/prisma";

export async function processPayment(tenantId: string, amount: number) {
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
        propertyId: "default",
        amount: 1000,
        paidAmount: 0,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        status: 'UNPAID',
      },
    });
  }

  // Create a payment record with status PENDING.
  const payment = await prisma.payment.create({
    data: {
      tenantId,
      amount: amount,
      status: 'PENDING',
      invoiceId: invoice.id,
      method: 'ONLINE',
    },
  });

  // Update the invoice with the payment amount.
  const currentPaid = invoice.paidAmount;
  const newPaidAmount = currentPaid + amount;
  const invoiceAmount = invoice.amount;
  const updatedStatus = newPaidAmount >= invoiceAmount ? 'PAID' : 'UNPAID';

  await prisma.invoice.update({
    where: { id: invoice.id },
    data: {
      paidAmount: { increment: amount },
      status: updatedStatus,
    },
  });

  // Simulate asynchronous settlement (e.g., confirmation from a payment gateway)
  setTimeout(async () => {
    try {
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: 'COMPLETED' },
      });
    } catch (error) {
      console.error("Error completing payment settlement:", error);
    }
  }, 2000);

  return payment;
}
