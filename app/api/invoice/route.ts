import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import {
  createInvoiceSchema,
  updateInvoiceSchema,
} from '@/lib/validations/invoice';

// Force truly dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 30;

// Shared Zod schema for UUID query params
const invoiceQuerySchema = z.object({
  tenantId: z.string().uuid().optional(),
  propertyId: z.string().uuid().optional(),
  id: z.string().uuid().optional(),
});

// GET /api/invoice
export async function GET(request: NextRequest) {
  // parse & validate tenantId + propertyId
  const { searchParams } = request.nextUrl;
  const params = Object.fromEntries(searchParams);
  const result = invoiceQuerySchema
    .pick({ tenantId: true, propertyId: true })
    .safeParse(params);

  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid query parameters', details: result.error.errors },
      { status: 400 }
    );
  }

  try {
    const invoices = await prisma.invoice.findMany({
      where: result.data,
      include: {
        tenant: { select: { name: true, email: true } },
        property: { select: { address: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(invoices);
  } catch (err) {
    console.error('Error fetching invoices:', err);
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}

// POST /api/invoice
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = createInvoiceSchema.parse(body);
    const invoice = await prisma.invoice.create({
      data: {
        ...validated,
        status: 'UNPAID',
      },
      include: {
        tenant: { select: { name: true, email: true } },
        property: { select: { address: true } },
      },
    });
    return NextResponse.json(invoice, { status: 201 });
  } catch (err) {
    console.error('Error creating invoice:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    );
  }
}

// PATCH /api/invoice
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = updateInvoiceSchema.parse(body);

    const invoice = await prisma.invoice.update({
      where: { id: validated.id },
      data: {
        // only override dueDate if provided
        ...(validated.dueDate && { dueDate: validated.dueDate }),
        ...validated,
      },
      include: {
        tenant: { select: { name: true, email: true } },
        property: { select: { address: true } },
      },
    });

    return NextResponse.json(invoice);
  } catch (err) {
    console.error('Error updating invoice:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update invoice' },
      { status: 500 }
    );
  }
}

// DELETE /api/invoice
export async function DELETE(request: NextRequest) {
  // parse & validate id
  const { searchParams } = request.nextUrl;
  const result = invoiceQuerySchema
    .pick({ id: true })
    .safeParse({ id: searchParams.get('id') });

  if (!result.success || !result.data.id) {
    return NextResponse.json(
      { error: 'A valid invoice ID (UUID) is required' },
      { status: 400 }
    );
  }

  try {
    await prisma.invoice.delete({ where: { id: result.data.id } });
    return NextResponse.json(
      { message: 'Invoice deleted successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error deleting invoice:', err);
    return NextResponse.json(
      { error: 'Failed to delete invoice' },
      { status: 500 }
    );
  }
}
