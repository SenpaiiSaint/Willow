import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Await the promise to get the actual { id } object
  const { id: paramId } = await params;

  // 2. Convert the string param to a number
  const id = Number(paramId);
  if (!id) {
    return NextResponse.json({ error: 'Invalid tenant ID' }, { status: 400 });
  }

  try {
    // 3. Fetch the tenant from the DB
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        invoices: true,
        payments: true,
      },
    });

    // 4. Not found?
    if (!tenant) {
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });
    }

    // 5. Return tenant data
    return NextResponse.json(tenant, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
