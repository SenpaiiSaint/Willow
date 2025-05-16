import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const propertySchema = z.object({
  address: z.string().min(1),
  unit: z.string().optional(),
  city: z.string().optional(),
  state: z.string().min(1),
  zip: z.string().min(1),
  country: z.string().min(1),
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

    const properties = await prisma.property.findMany({
      where: { organizationId },
      include: {
        tenants: {
          select: { id: true },
        },
        leases: {
          select: { id: true },
        },
      },
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error('Properties fetch error:', error);
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
    const validatedData = propertySchema.parse(body);

    // Check if property already exists
    const existingProperty = await prisma.property.findFirst({
      where: {
        organizationId,
        address: validatedData.address,
        unit: validatedData.unit,
      },
    });

    if (existingProperty) {
      return NextResponse.json(
        { error: 'Property already exists' },
        { status: 400 }
      );
    }

    const property = await prisma.property.create({
      data: {
        ...validatedData,
        organizationId,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error('Property creation error:', error);
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