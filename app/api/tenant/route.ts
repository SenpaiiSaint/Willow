// app/api/tenant/route.ts

import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

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

const createTenantSchema = z.object({
  userId: z.string().uuid('Invalid user ID'),
  propertyId: z.string().uuid('Invalid property ID'),
});

const updateTenantSchema = z.object({
  id: z.string().uuid('Invalid tenant ID'),
  propertyId: z.string().uuid('Invalid property ID'),
});

//–– Shared Prisma include definitions

const listInclude: Prisma.TenantInclude = {
  property: {
    select: { id: true, address: true },
  },
  user: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  lease: {
    select: {
      id: true,
      startDate: true,
      endDate: true,
      rentAmount: true,
      status: true,
    },
  },
};

const detailInclude: Prisma.TenantInclude = {
  property: { select: { address: true } },
  user: { select: { name: true, email: true } },
  lease: { select: { id: true, status: true } },
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
  // Log the full error for debugging
  console.error('API Error:', err);
  
  // Return a more specific error message
  return NextResponse.json(
    { 
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request'
    },
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
      ? { propertyId: q.propertyId }
      : {};

    const tenants = await prisma.tenant.findMany({
      where,
      include: listInclude,
      orderBy: { createdAt: 'desc' },
    });

    if (!tenants) {
      return NextResponse.json(
        { error: 'No tenants found' },
        { status: 404 }
      );
    }

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
    const body = await request.json();
    const validatedData = createTenantSchema.parse(body);

    const tenant = await prisma.tenant.create({
      data: {
        userId: validatedData.userId,
        propertyId: validatedData.propertyId,
      },
      include: detailInclude,
    });

    return NextResponse.json(tenant);
  } catch (error) {
    console.error('Error creating tenant:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e: { message: string }) => e.message).join(', ') },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create tenant' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/tenant
 * → Update an existing tenant
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = updateTenantSchema.parse(body);

    const tenant = await prisma.tenant.update({
      where: { id: validatedData.id },
      data: {
        propertyId: validatedData.propertyId,
      },
      include: detailInclude,
    });

    return NextResponse.json(tenant);
  } catch (error) {
    console.error('Error updating tenant:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e: { message: string }) => e.message).join(', ') },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update tenant' },
      { status: 500 }
    );
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
