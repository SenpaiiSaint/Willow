import { POST } from '@/app/api/webhook/route';
import prisma from '@/lib/prisma';

// Mock prisma to control behavior in tests
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    rentPayment: {
      update: jest.fn(),
    },
    invoice: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe('POST /api/webhook', () => {
  const mockedPrisma = prisma as jest.Mocked<typeof prisma>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns 400 if paymentId or status is missing', async () => {
    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toEqual({
      error: 'Missing paymentId or status in request body',
    });
  });

  it('returns 400 if status is invalid', async () => {
    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 123, status: 'INVALID_STATUS' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toEqual({ error: 'Invalid status value' });
  });

  it('updates the payment status (e.g., FAILED) and returns the updated payment', async () => {
    const updatedPayment = {
      id: 123,
      status: 'FAILED',
      invoiceId: null,
    };
    (mockedPrisma.rentPayment.update as jest.Mock).mockResolvedValue(updatedPayment);
    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 123, status: 'FAILED' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchObject({
      id: 123,
      status: 'FAILED',
      invoiceId: null,
    });
    expect(mockedPrisma.rentPayment.update).toHaveBeenCalledWith({
      where: { id: 123 },
      data: { status: 'FAILED' },
    });
  });

  it('does not update the invoice if payment.invoiceId is null', async () => {
    const updatedPayment = {
      id: 456,
      invoiceId: null,
      status: 'COMPLETED',
    };
    (mockedPrisma.rentPayment.update as jest.Mock).mockResolvedValue(updatedPayment);
    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 456, status: 'COMPLETED' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchObject({
      id: 456,
      status: 'COMPLETED',
      invoiceId: null,
    });
    expect(mockedPrisma.invoice.findUnique).not.toHaveBeenCalled();
    expect(mockedPrisma.invoice.update).not.toHaveBeenCalled();
  });

  it('updates the invoice if payment is COMPLETED and invoiceId is present (partial payment)', async () => {
    const paymentAmount = { toNumber: () => 25 };
    const updatedPayment = {
      id: 789,
      invoiceId: 999,
      status: 'COMPLETED',
      amount: paymentAmount,
    };
    (mockedPrisma.rentPayment.update as jest.Mock).mockResolvedValue(updatedPayment as any);

    const existingInvoice = {
      id: 999,
      paidAmount: { toNumber: () => 50 },
      amount: { toNumber: () => 100 },
      status: 'UNPAID',
    };
    (mockedPrisma.invoice.findUnique as jest.Mock).mockResolvedValue(existingInvoice as any);

    (mockedPrisma.invoice.update as jest.Mock).mockResolvedValue({
      id: 999,
      paidAmount: { toNumber: () => 75 },
      status: 'UNPAID',
    } as any);

    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 789, status: 'COMPLETED' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    // Use toMatchObject to compare key properties and ignore function details on "amount"
    expect(json).toMatchObject({
      id: 789,
      invoiceId: 999,
      status: 'COMPLETED',
    });
    expect(mockedPrisma.invoice.findUnique).toHaveBeenCalledWith({
      where: { id: 999 },
    });
    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 999 },
      data: {
        paidAmount: { increment: updatedPayment.amount },
        status: 'UNPAID',
      },
    });
  });

  it('updates the invoice if payment is COMPLETED and invoice is fully paid', async () => {
    const paymentAmount = { toNumber: () => 50 };
    const updatedPayment = {
      id: 321,
      invoiceId: 888,
      status: 'COMPLETED',
      amount: paymentAmount,
    };
    (mockedPrisma.rentPayment.update as jest.Mock).mockResolvedValue(updatedPayment as any);

    const existingInvoice = {
      id: 888,
      paidAmount: { toNumber: () => 50 },
      amount: { toNumber: () => 100 },
      status: 'UNPAID',
    };
    (mockedPrisma.invoice.findUnique as jest.Mock).mockResolvedValue(existingInvoice as any);

    (mockedPrisma.invoice.update as jest.Mock).mockResolvedValue({
      id: 888,
      paidAmount: { toNumber: () => 100 },
      status: 'PAID',
    } as any);

    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 321, status: 'COMPLETED' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchObject({
      id: 321,
      invoiceId: 888,
      status: 'COMPLETED',
    });
    expect(mockedPrisma.invoice.findUnique).toHaveBeenCalledWith({
      where: { id: 888 },
    });
    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 888 },
      data: {
        paidAmount: { increment: updatedPayment.amount },
        status: 'PAID',
      },
    });
  });

  it('returns 500 if an error occurs', async () => {
    (mockedPrisma.rentPayment.update as jest.Mock).mockRejectedValue(new Error('Database error'));
    const req = new Request('http://localhost/api/webhook', {
      method: 'POST',
      body: JSON.stringify({ paymentId: 10, status: 'COMPLETED' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json).toEqual({ error: 'Database error' });
  });
});
