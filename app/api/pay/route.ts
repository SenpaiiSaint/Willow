import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { createPaymentSchema } from '@/lib/validations/payment';
import { PrismaClient } from '@prisma/client';

// Force truly dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    // Parse & validate body
    const body = await request.json();
    const validated = createPaymentSchema.parse(body);

    // Find the oldest unpaid invoice for this tenant
    const invoice = await prisma.invoice.findFirst({
      where: {
        tenantId: validated.tenantId,
        status: 'UNPAID',
      },
      include: {
        payments: {
          select: {
            amount: true,
          },
        },
      },
      orderBy: { dueDate: 'asc' },
    });

    if (!invoice) {
      return NextResponse.json(
        { error: 'No unpaid invoice found for this tenant' },
        { status: 404 }
      );
    }

    // Calculate total paid amount from payments
    const totalPaid = invoice.payments.reduce((sum, payment) => sum + payment.amount, 0);
    const updatedPaid = totalPaid + validated.amount;
    const newStatus = updatedPaid >= invoice.amount ? 'PAID' : 'PARTIALLY_PAID';

    // Wrap creation + invoice update in a transaction
    const result = await prisma.$transaction(async (tx: PrismaClient) => {
      // Create payment
      const payment = await tx.payment.create({
        data: {
          tenantId: validated.tenantId,
          amount: validated.amount,
          status: 'PENDING',
          invoiceId: invoice.id,
        },
        include: {
          tenant: { select: { name: true, email: true } },
          invoice: {
            select: {
              amount: true,
              paidAmount: true,
              dueDate: true,
            },
          },
        },
      });

      // Update invoice
      await tx.invoice.update({
        where: { id: invoice.id },
        data: {
          paidAmount: updatedPaid,
          status: newStatus,
        },
      });

      return payment;
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error('Error processing payment:', err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    );
  }
}
