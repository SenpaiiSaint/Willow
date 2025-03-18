import prisma from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';

export async function processPayment(tenantId: number, amount: number) {
  // Find the first unpaid invoice for the tenant
  const invoice = await prisma.invoice.findFirst({
    where: {
      tenantId,
      status: 'UNPAID'
    },
    orderBy: { dueDate: 'asc' }
  });

  if (!invoice) {
    throw new Error('No outstanding invoice found');
  }

  // Create a payment record with status PENDING.
  // If your schema uses Decimal, wrap the numeric amount accordingly.
  const payment = await prisma.rentPayment.create({
    data: {
      tenantId,
      amount: new Decimal(amount),
      status: 'PENDING',
      invoiceId: invoice.id
    }
  });

  // Calculate new paid amount using the Decimal values.
  const currentPaid = invoice.paidAmount.toNumber();
  const newPaidAmount = currentPaid + amount;
  const invoiceAmount = invoice.amount.toNumber();
  const updatedStatus = newPaidAmount >= invoiceAmount ? 'PAID' : 'UNPAID';

  // Update the invoice with the new paid amount and status.
  await prisma.invoice.update({
    where: { id: invoice.id },
    data: {
      paidAmount: { increment: new Decimal(amount) },
      status: updatedStatus
    }
  });

  // Simulate asynchronous settlement (e.g., payment gateway confirmation)
  setTimeout(async () => {
    await prisma.rentPayment.update({
      where: { id: payment.id },
      data: { status: 'COMPLETED' }
    });
  }, 2000);

  return payment;
}
