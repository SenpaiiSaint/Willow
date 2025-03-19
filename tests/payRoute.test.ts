import { POST } from '@/app/api/pay/route';
import prisma from '@/lib/prisma';

// Mock the Prisma client
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    invoice: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
    rentPayment: {
      create: jest.fn(),
    },
  },
}));

describe('POST /api/pay', () => {
  // Cast prisma to a jest mocked version for easier mocking of its methods.
  const mockedPrisma = prisma as jest.Mocked<typeof prisma>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns 400 if tenantId or amount is missing', async () => {
    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toEqual({ error: 'Invalid request body' });
  });

  it('returns 404 if no unpaid invoice is found', async () => {
    // Simulate no unpaid invoice found
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValue(null);
    
    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toEqual({ error: 'No unpaid invoice found' });
  });

  it('creates a payment and updates the invoice to UNPAID when not fully paid', async () => {
    // Simulate an unpaid invoice with a partial paid amount
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValueOnce({
      id: 999,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 25 },
      status: 'UNPAID',
      dueDate: new Date(),
    } as any);

    // Simulate creation of a payment record
    const createdPayment = {
      id: 1,
      tenantId: 123,
      amount: 50,
      status: 'PENDING',
      invoiceId: 999,
    };
    (mockedPrisma.rentPayment.create as jest.Mock).mockResolvedValueOnce(createdPayment);

    // Simulate invoice update after partial payment
    (mockedPrisma.invoice.update as jest.Mock).mockResolvedValueOnce({
      id: 999,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 75 }, // 25 + 50
      status: 'UNPAID',
    } as any);

    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toEqual(createdPayment);

    // Verify that invoice.update was called with the correct data
    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 999 },
      data: {
        paidAmount: 75, // expected new paid amount
        status: 'UNPAID',
      },
    });
  });

  it('creates a payment and updates the invoice to PAID when fully paid', async () => {
    // Simulate an unpaid invoice that will be fully paid by the payment
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValueOnce({
      id: 1000,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 50 },
      status: 'UNPAID',
      dueDate: new Date(),
    } as any);

    // Simulate creation of a payment record
    const createdPayment = {
      id: 2,
      tenantId: 123,
      amount: 50,
      status: 'PENDING',
      invoiceId: 1000,
    };
    (mockedPrisma.rentPayment.create as jest.Mock).mockResolvedValueOnce(createdPayment);

    // Simulate invoice update after full payment
    (mockedPrisma.invoice.update as jest.Mock).mockResolvedValueOnce({
      id: 1000,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 100 },
      status: 'PAID',
    } as any);

    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json).toEqual(createdPayment);

    // Verify invoice.update was called to update invoice status to PAID
    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 1000 },
      data: {
        paidAmount: 100, // 50 (previous) + 50 (payment)
        status: 'PAID',
      },
    });
  });

  it('returns 500 if an error occurs', async () => {
    // Force an error by rejecting findFirst
    (mockedPrisma.invoice.findFirst as jest.Mock).mockRejectedValueOnce(new Error('Database failure'));
    
    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json).toEqual({ error: 'Database failure' });
  });
});
