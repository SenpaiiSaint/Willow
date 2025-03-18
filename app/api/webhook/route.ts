import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { paymentId, status } = body;

        if (!paymentId || !status) {
            return NextResponse.json({ error: 'Invalid payload' }, {status: 400 });
        }

        const validStatus = ['PENDING', 'COMPLETED', 'FAILED'];
        if (!validStatus.includes(status)) {
            return NextResponse.json({ error: 'Invalid status'}, { status: 400 });
        }

        //Update the payment status
        const payment = await prisma.rentPayment.update({
            where: { id: paymentId },
            data: { status }
        });

        //If payment is completed, update the linked invoice
        if (status === 'COMPLETED' && payment.invoiceId) {
            const invoice = await prisma.invoice.findUnique({
                where: { id: payment.invoiceId }
            });

            if (invoice) {
                const currentPaid = invoice.paidAmount.toNumber();
                const newPaidAmount = currentPaid + payment.amount.toNumber();
                const updatedStatus = newPaidAmount >= invoice.amount.toNumber() ? 'PAID' : 'UNPAID';

                await prisma.invoice.update({
                    where: { id: invoice.id },
                    data: {
                        paidAmount: { increment: payment.amount },
                        status: updatedStatus
                    }
                });
            }
        }

        return NextResponse.json(payment, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}