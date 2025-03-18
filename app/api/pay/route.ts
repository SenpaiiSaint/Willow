import { NextResponse } from "next/server";
import { processPayment } from "@/app/services/paymentService";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { tenantId, amount } = body;
        const payment = await processPayment(tenantId, amount);
        return NextResponse.json(payment, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message}, { status: 400 })
    }
}