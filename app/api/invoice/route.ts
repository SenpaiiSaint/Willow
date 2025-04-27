import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import {
  createInvoiceSchema,
  updateInvoiceSchema,
} from '@/lib/validations/invoice';

// Force truly dynamic rendering + short ISR
export const dynamic = 'force-dynamic';
export const revalidate = 30;

// -- shared config/validators --

const invoiceInclude = {
  tenant:   { select: { name: true, email: true } },
  property: { select: { address: true } },
};

const invoiceQuerySchema = z.object({
  tenantId:   z.string().uuid().optional(),
  propertyId: z.string().uuid().optional(),
  id:         z.string().uuid().optional(),
});

// small helper for throwing JSON errors
class ApiError extends Error {
  status: number;
  details?: unknown;
  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

// common error handler
function handleError(err: unknown) {
  if (err instanceof ApiError) {
    return NextResponse.json(
      { error: err.message, details: err.details },
      { status: err.status }
    );
  }
  if (err instanceof z.ZodError) {
    return NextResponse.json(
      { error: 'Validation error', details: err.errors },
      { status: 400 }
    );
  }
  console.error(err);
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  );
}

/** GET /api/invoice
 *  - GET ?id=…      ⇒ single invoice (404 if not found)
 *  - GET ?tenantId=… ⇒ list filtered by tenant/property
 */
export async function GET(request: NextRequest) {
  try {
    // parse out id, tenantId, propertyId
    const params = Object.fromEntries(request.nextUrl.searchParams.entries());
    const result = invoiceQuerySchema.safeParse(params);
    if (!result.success) {
      throw new ApiError(400, 'Invalid query parameters', result.error.errors);
    }
    const { id, tenantId, propertyId } = result.data;

    if (id) {
      const invoice = await prisma.invoice.findUnique({
        where: { id },
        include: invoiceInclude,
      });
      if (!invoice) {
        return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
      }
      return NextResponse.json(invoice);
    }

    // build a `where` only with defined filters
    const where: Record<string, string> = {};
    if (tenantId)   where.tenantId   = tenantId;
    if (propertyId) where.propertyId = propertyId;

    const invoices = await prisma.invoice.findMany({
      where,
      include: invoiceInclude,
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(invoices);
  } catch (err) {
    return handleError(err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const dto = createInvoiceSchema.parse(await request.json());
    const invoice = await prisma.invoice.create({
      data: { ...dto, status: 'UNPAID' },
      include: invoiceInclude,
    });
    return NextResponse.json(invoice, { status: 201 });
  } catch (err) {
    return handleError(err);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // pull `id` off before spreading the rest
    const { id, ...updates } = updateInvoiceSchema.parse(await request.json());
    const invoice = await prisma.invoice.update({
      where: { id },
      data: updates,
      include: invoiceInclude,
    });
    return NextResponse.json(invoice);
  } catch (err) {
    return handleError(err);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // require a valid id
    const { id } = invoiceQuerySchema
      .pick({ id: true })
      .parse({ id: request.nextUrl.searchParams.get('id') });

    await prisma.invoice.delete({ where: { id } });
    return NextResponse.json({ message: 'Invoice deleted successfully' });
  } catch (err) {
    return handleError(err);
  }
}
