// app/api/tenant/route.ts

import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import {
  createTenantSchema,
  updateTenantSchema,
} from '@/lib/validations/tenant';

// truly dynamic + no caching
export const dynamic    = 'force-dynamic';
export const revalidate = 0;

//–– Zod schemas for query params

const getTenantsQuery = z.object({
  propertyId: z.string().uuid().optional(),
});

const deleteTenantQuery = z.object({
  id: z.string().uuid('Invalid tenant ID'),
});

//–– Shared Prisma include definitions

const listInclude = {
  properties: {
    select: { id: true, address: true, type: true, status: true },
  },
  leaseAgreements: {
    select: {
      id: true,
      startDate: true,
      endDate: true,
      rentAmount: true,
      status: true,
      terms: true,
    },
  },
  invoices: {
    select: {
      id: true,
      amount: true,
      paidAmount: true,
      status: true,
      dueDate: true,
      createdAt: true,
    },
    orderBy: { dueDate: 'asc' as const },
  },
  payments: {
    select: {
      id: true,
      amount: true,
      status: true,
      createdAt: true,
      method: true,
    },
    orderBy: { createdAt: 'desc' as const },
  },
  maintenanceRequests: {
    select: {
      id: true,
      type: true,
      priority: true,
      status: true,
      description: true,
      createdAt: true,
    },
  },
};

const detailInclude = {
  properties: { select: { address: true } },
  invoices: {
    select: { id: true, amount: true, paidAmount: true, status: true, dueDate: true },
    orderBy: { dueDate: 'asc' as const },
  },
  payments: {
    select: { id: true, amount: true, status: true, createdAt: true },
    orderBy: { createdAt: 'desc' as const },
  },
};

//–– Error utilities

class ApiError extends Error {
  status: number;
  details?: unknown;
  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status  = status;
    this.details = details;
  }
}

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

//–– Handlers

/**
 * GET /api/tenant
 * → Optionally filter by ?propertyId=…
 */
export async function GET(request: NextRequest) {
  try {
    const rawQuery = Object.fromEntries(request.nextUrl.searchParams);
    const q = getTenantsQuery.parse(rawQuery);

    // build `where` only if propertyId is provided
    const where = q.propertyId
      ? { properties: { some: { id: q.propertyId } } }
      : {};

    const tenants = await prisma.tenant.findMany({
      where,
      include: listInclude,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(tenants);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * POST /api/tenant
 * → Create a new tenant
 */
export async function POST(request: NextRequest) {
  try {
    const dto = createTenantSchema.parse(await request.json());

    const tenant = await prisma.tenant.create({
      data: dto,
      include: detailInclude,
    });

    return NextResponse.json(tenant, { status: 201 });
  } catch (err) {
    return handleError(err);
  }
}

/**
 * PATCH /api/tenant
 * → Update an existing tenant
 */
export async function PATCH(request: NextRequest) {
  try {
    const dto = updateTenantSchema.parse(await request.json());
    const { id, ...updates } = dto;

    const tenant = await prisma.tenant.update({
      where: { id },
      data: updates,
      include: detailInclude,
    });

    return NextResponse.json(tenant);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * DELETE /api/tenant?id=…
 * → Remove a tenant by ID
 */
export async function DELETE(request: NextRequest) {
  try {
    const rawQuery = Object.fromEntries(request.nextUrl.searchParams);
    const { id } = deleteTenantQuery.parse(rawQuery);

    const deleted = await prisma.tenant.delete({ where: { id } });
    return NextResponse.json(deleted);
  } catch (err) {
    return handleError(err);
  }
}
