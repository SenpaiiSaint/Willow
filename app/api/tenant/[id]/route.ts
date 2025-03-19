import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Await the params promise to get the id value
  const { id } = await params;
  const tenantId = Number(id);
  if (isNaN(tenantId)) {
    return NextResponse.json({ error: 'Invalid tenant ID' }, { status: 400 });
  }

  console.log(`➡️ Fetching tenant with ID: ${tenantId}`);

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { invoices: true, payments: true },
    });

    if (!tenant) {
      console.error(`❌ Tenant not found for ID: ${tenantId}`);
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    console.log(`✅ Tenant fetched successfully:`, tenant);
    return NextResponse.json(tenant);
  } catch (error) {
    console.error('❌ Error fetching tenant:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Missing name or email field' },
        { status: 400 }
      );
    }

    const newTenant = await prisma.tenant.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    console.log(`✅ Tenant created successfully:`, newTenant);
    return NextResponse.json(newTenant, { status: 201 });
  } catch (error) {
    console.error('❌ Error creating tenant:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tenantId = Number(params.id);
    if (isNaN(tenantId)) {
      return NextResponse.json({ error: 'Invalid tenant ID' }, { status: 400 });
    }

    const deletedTenant = await prisma.tenant.delete({
      where: { id: tenantId },
    });

    console.log(`✅ Tenant deleted successfully:`, deletedTenant);
    return NextResponse.json(deletedTenant, { status: 200 });
  } catch (error) {
    console.error('❌ Error deleting tenant:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
