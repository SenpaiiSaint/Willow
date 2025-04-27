import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import {
  createTenantSchema,
  updateTenantSchema,
} from '@/lib/validations/tenant';

// Force truly dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Zod schemas for query parameters
const getTenantsQuery = z.object({
  propertyId: z.string().uuid().optional(),
});
const deleteTenantQuery = z.object({
  id: z.string().uuid(),
});

// GET /api/tenant
export async function GET(request: NextRequest) {
  // Validate `propertyId` if present
  const query = Object.fromEntries(request.nextUrl.searchParams);
  const qResult = getTenantsQuery.safeParse(query);
  if (!qResult.success) {
    return NextResponse.json(
      { error: 'Invalid query parameters', details: qResult.error.errors },
      { status: 400 }
    );
  }

  try {
    const tenants = await prisma.tenant.findMany({
      where: qResult.data.propertyId
        ? { properties: { some: { id: qResult.data.propertyId } } }
        : {},
      include: {
        properties: { select: { address: true } },
        invoices: {
          select: {
            id: true,
            amount: true,
            paidAmount: true,
            status: true,
            dueDate: true,
          },
          orderBy: { dueDate: 'asc' },
        },
        payments: {
          select: {
            id: true,
            amount: true,
            status: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(tenants);
  } catch (err) {
    console.error('Error fetching tenants:', err);
    return NextResponse.json(
      {
        error: 'Failed to fetch tenants',
        details: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// POST /api/tenant
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = createTenantSchema.parse(body);

    const tenant = await prisma.tenant.create({
      data: validated,
      include: {
        properties: { select: { address: true } },
      },
    });

    return NextResponse.json(tenant, { status: 201 });
  } catch (err) {
    console.error('Error creating tenant:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create tenant' },
      { status: 500 }
    );
  }
}

// PATCH /api/tenant
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = updateTenantSchema.parse(body);

    const tenant = await prisma.tenant.update({
      where: { id: validated.id },
      data: validated,
      include: {
        properties: { select: { address: true } },
        invoices: {
          select: {
            id: true,
            amount: true,
            paidAmount: true,
            status: true,
            dueDate: true,
          },
          orderBy: { dueDate: 'asc' },
        },
        payments: {
          select: {
            id: true,
            amount: true,
            status: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return NextResponse.json(tenant);
  } catch (err) {
    console.error('Error updating tenant:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update tenant' },
      { status: 500 }
    );
  }
}

// DELETE /api/tenant
export async function DELETE(request: NextRequest) {
  const query = Object.fromEntries(request.nextUrl.searchParams);
  const dResult = deleteTenantQuery.safeParse(query);

  if (!dResult.success) {
    return NextResponse.json(
      { error: 'A valid tenant ID (UUID) is required', details: dResult.error.errors },
      { status: 400 }
    );
  }

  try {
    const deleted = await prisma.tenant.delete({
      where: { id: dResult.data.id },
    });
    return NextResponse.json(deleted);
  } catch (err) {
    console.error('Error deleting tenant:', err);
    return NextResponse.json(
      { error: 'Failed to delete tenant', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
