import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // 1) await the entire params object
    const { id } = await context.params;
    const tenantId = Number(id);
    if (!tenantId) {
      return NextResponse.json({ error: 'Invalid tenant ID' }, { status: 400 });
    }

    console.log(`➡️ Fetching tenant with ID: ${tenantId}`);

    // 2) Query with Prisma
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching tenant:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error fetching tenant:', error);
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
