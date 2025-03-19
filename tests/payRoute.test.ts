import { POST } from '@/app/api/pay/route';
import prisma from '@/lib/prisma';

// Mock prisma to control behavior in tests
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
  // Cast prisma to a jest.Mocked version for easier mocking.
  const mockedPrisma = prisma as jest.Mocked<typeof prisma>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if tenantId or amount is missing', async () => {
    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({}),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toEqual({ error: 'Invalid request body' });
  });

  it('should return 404 if no unpaid invoice is found', async () => {
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValueOnce(null);
    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(404);
    const json = await res.json();
    expect(json).toEqual({ error: 'No unpaid invoice found' });
  });

  it('should create a payment and update the invoice to UNPAID if not fully paid', async () => {
    // Simulate an invoice where 25 of 100 is already paid.
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValueOnce({
      id: 999,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 25 },
      status: 'UNPAID',
      dueDate: new Date(),
    } as any);

    const createdPayment = {
      id: 1,
      tenantId: 123,
      amount: 50,
      status: 'PENDING',
      invoiceId: 999,
    };
    (mockedPrisma.rentPayment.create as jest.Mock).mockResolvedValueOnce(createdPayment);

    // Simulate invoice update so that new paid amount becomes 75.
    (mockedPrisma.invoice.update as jest.Mock).mockResolvedValueOnce({
      id: 999,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 75 },
      status: 'UNPAID',
    } as any);

    const req = new Request('http://localhost/api/pay', {
      method: 'POST',
      body: JSON.stringify({ tenantId: 123, amount: 50 }),
    });
    const res = await POST(req);
    expect(res.status).toBe(201);
    const json = await res.json();
    // Use toMatchObject to avoid deep equality issues with non-serializable properties.
    expect(json).toMatchObject(createdPayment);

    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 999 },
      data: {
        paidAmount: 75,
        status: 'UNPAID',
      },
    });
  });

  it('should create a payment and update the invoice to PAID if fully paid', async () => {
    // Simulate an invoice where 50 of 100 is already paid.
    (mockedPrisma.invoice.findFirst as jest.Mock).mockResolvedValueOnce({
      id: 1000,
      tenantId: 123,
      amount: { toNumber: () => 100 },
      paidAmount: { toNumber: () => 50 },
      status: 'UNPAID',
      dueDate: new Date(),
    } as any);

    const createdPayment = {
      id: 2,
      tenantId: 123,
      amount: 50,
      status: 'PENDING',
      invoiceId: 1000,
    };
    (mockedPrisma.rentPayment.create as jest.Mock).mockResolvedValueOnce(createdPayment);

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
    expect(json).toMatchObject(createdPayment);

    expect(mockedPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 1000 },
      data: {
        paidAmount: 100,
        status: 'PAID',
      },
    });
  });

  it('should return 500 if an error occurs', async () => {
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
