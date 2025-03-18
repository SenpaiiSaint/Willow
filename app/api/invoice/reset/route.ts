import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    // ✅ Log the raw request body to confirm it's reaching the server
    const bodyText = await req.text();
    console.log('➡️ Raw request body:', bodyText);

    if (!bodyText) {
      console.error('❌ Empty request body');
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }

    let body;
    try {
      body = JSON.parse(bodyText); // <-- Attempt to parse JSON manually
    } catch (parseError) {
      console.error('❌ Failed to parse JSON:', parseError);
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    const { invoiceId } = body;

    // ✅ Ensure invoiceId is valid
    if (!invoiceId || typeof invoiceId !== 'number') {
      console.error(`❌ Invalid or missing invoiceId: ${invoiceId}`);
      return NextResponse.json({ error: 'Invalid or missing invoiceId' }, { status: 400 });
    }

    console.log(`➡️ Resetting invoice with ID: ${invoiceId}`);

    // ✅ Confirm invoice exists before updating
    const existingInvoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
    });

    if (!existingInvoice) {
      console.error(`❌ Invoice not found with ID: ${invoiceId}`);
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    if (existingInvoice.status === 'UNPAID') {
      console.log(`ℹ️ Invoice ${invoiceId} is already unpaid.`);
      return NextResponse.json({ message: 'Invoice already reset' }, { status: 200 });
    }

    // ✅ Reset the invoice
    const updatedInvoice = await prisma.invoice.update({
      where: { id: invoiceId },
      data: {
        paidAmount: 0.0,
        status: 'UNPAID',
      },
    });

    console.log(`✅ Invoice reset successfully:`, updatedInvoice);

    return NextResponse.json(updatedInvoice, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error resetting invoice:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error('Unexpected error resetting invoice:', error);
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
