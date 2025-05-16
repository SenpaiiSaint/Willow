import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const tenantSchema = z.object({
  userId: z.string(),
  propertyId: z.string(),
});

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const organizationId = req.headers.get('x-organization-id');
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID required' },
        { status: 401 }
      );
    }

    const tenants = await prisma.tenant.findMany({
      where: {
        property: {
          organizationId,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        property: {
          select: {
            id: true,
            address: true,
            unit: true,
          },
        },
        lease: {
          select: {
            id: true,
            startDate: true,
            endDate: true,
            status: true,
          },
        },
      },
    });

    return NextResponse.json(tenants);
  } catch (error) {
    console.error('Tenants fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const organizationId = req.headers.get('x-organization-id');
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = tenantSchema.parse(body);

    // Check if property belongs to organization
    const property = await prisma.property.findFirst({
      where: {
        id: validatedData.propertyId,
        organizationId,
      },
    });

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found or not accessible' },
        { status: 404 }
      );
    }

    // Check if user exists and belongs to organization
    const user = await prisma.user.findFirst({
      where: {
        id: validatedData.userId,
        organizationId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found or not accessible' },
        { status: 404 }
      );
    }

    // Check if tenant already exists for this property
    const existingTenant = await prisma.tenant.findFirst({
      where: {
        userId: validatedData.userId,
        propertyId: validatedData.propertyId,
      },
    });

    if (existingTenant) {
      return NextResponse.json(
        { error: 'User is already a tenant of this property' },
        { status: 400 }
      );
    }

    const tenant = await prisma.tenant.create({
      data: {
        userId: validatedData.userId,
        propertyId: validatedData.propertyId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        property: {
          select: {
            id: true,
            address: true,
            unit: true,
          },
        },
      },
    });

    return NextResponse.json(tenant);
  } catch (error) {
    console.error('Tenant creation error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 