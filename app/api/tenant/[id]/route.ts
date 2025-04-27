import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Force truly dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Zod schema for the `id` path parameter
const idParamSchema = z.object({
  id: z.string().uuid(),
});

// Zod schema for tenant creation
const createTenantSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

// GET /api/tenant/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate and coerce the `id` param
  const parseId = idParamSchema.safeParse(params);
  if (!parseId.success) {
    return NextResponse.json(
      { error: 'Invalid tenant ID', details: parseId.error.errors },
      { status: 400 }
    );
  }
  const tenantId = parseId.data.id;

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        invoices: { orderBy: { dueDate: 'asc' } },
        payments: { orderBy: { createdAt: 'desc' } },
      },
    });

    if (!tenant) {
      return NextResponse.json(
        { error: 'Tenant not found' },
        { status: 404 }
      );
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

// POST /api/tenant
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
  { params }: { params: { id: string } }
) {
  // Validate and coerce the `id` param
  const parseId = idParamSchema.safeParse(params);
  if (!parseId.success) {
    return NextResponse.json(
      { error: 'Invalid tenant ID', details: parseId.error.errors },
      { status: 400 }
    );
  }
  const tenantId = parseId.data.id;

  try {
    const deleted = await prisma.tenant.delete({
      where: { id: tenantId },
    });
    return NextResponse.json(deleted);
  } catch (err) {
    console.error('Error deleting tenant:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
