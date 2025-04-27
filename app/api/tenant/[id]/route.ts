import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Force truly dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Zod schema for the `id` path parameter
const idParamSchema = z.object({
  id: z.string().uuid('Invalid tenant ID'),
});

// Zod schema for tenant creation
const createTenantSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

// GET /api/tenant/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // Validate it
  const parsed = idParamSchema.safeParse({ id });
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors.map(e => e.message).join(', ') },
      { status: 400 }
    );
  }

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        invoices: { orderBy: { dueDate: 'asc' } },
        payments: { orderBy: { createdAt: 'desc' } },
      },
    });

    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    return NextResponse.json(tenant);
  } catch (err) {
    console.error('Error fetching tenant:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// POST /api/tenant/[id]
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = createTenantSchema.parse(body);

    const newTenant = await prisma.tenant.create({
      data: {
        name: validated.name,
        email: validated.email,
      },
    });

    return NextResponse.json(newTenant, { status: 201 });
  } catch (err) {
    console.error('Error creating tenant:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE /api/tenant/[id]
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const parsed = idParamSchema.safeParse({ id });
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors.map(e => e.message).join(', ') },
      { status: 400 }
    );
  }

  try {
    const deleted = await prisma.tenant.delete({ where: { id } });
    return NextResponse.json(deleted);
  } catch (err) {
    console.error('Error deleting tenant:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
