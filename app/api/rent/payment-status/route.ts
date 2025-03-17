import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

//GET all payments
export async function GET() {
    const payments = await prisma.rentPayment.findMany({ include: { tenant: true } });
    return NextResponse.json(payments);
}

//POST new payments
export async function POST(request: Request) {
    const body = await request.json();
    const tenant = await prisma.tenant.findUnique({ where: { email: body.tenantEmail } });

    if (!tenant) return NextResponse.json({ error: 'Tenant not found' }, { status: 404 });

    const newPayment = await prisma.rentPayment.create({
        data: { tenantId: tenant.id, amount: body.amount, status: 'paid' },
    });

    return NextResponse.json(newPayment, { status: 201 })
}