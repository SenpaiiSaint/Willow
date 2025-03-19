import { POST } from '@/app/api/invoice/reset/route';
import prisma from '@/lib/prisma';

// Mock Prisma to control its behavior in tests
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    invoice: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe('POST /invoice/reset', () => {
  const mockedPrisma = prisma as any;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if body is empty', async () => {
    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      // No body provided
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json).toEqual({ error: 'Empty request body' });
  });

  it('should return 400 if invalid JSON is provided', async () => {
    // Body that is not valid JSON
    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: 'this is not valid JSON',
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json).toEqual({ error: 'Invalid JSON format' });
  });

  it('should return 400 if missing or invalid invoiceId', async () => {
    // "invoiceId" is missing
    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json).toEqual({ error: 'Invalid or missing invoiceId' });
  });

  it('should return 404 if invoice not found', async () => {
    // Mock Prisma to return null (invoice not found)
    mockedPrisma.invoice.findUnique.mockResolvedValue(null);

    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: JSON.stringify({ invoiceId: 999 }),
    });

    const res = await POST(req);
    expect(res.status).toBe(404);

    const json = await res.json();
    expect(json).toEqual({ error: 'Invoice not found' });
  });

  it('should return 200 if invoice is already unpaid', async () => {
    // Mock Prisma to return an UNPAID invoice
    mockedPrisma.invoice.findUnique.mockResolvedValue({
      id: 123,
      status: 'UNPAID',
      paidAmount: 0.0,
    });

    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: JSON.stringify({ invoiceId: 123 }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual({ message: 'Invoice already reset' });
  });

  it('should reset invoice if it is PAID (or any status other than UNPAID)', async () => {
    // Mock Prisma to return a PAID invoice
    mockedPrisma.invoice.findUnique.mockResolvedValue({
      id: 456,
      status: 'PAID',
      paidAmount: 100.0,
    });

    // Mock the update call to return the updated invoice
    const updatedInvoice = {
      id: 456,
      status: 'UNPAID',
      paidAmount: 0.0,
    };
    mockedPrisma.invoice.update.mockResolvedValue(updatedInvoice);

    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: JSON.stringify({ invoiceId: 456 }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toEqual(updatedInvoice);
  });

  it('should return 500 if an error is thrown', async () => {
    // Force Prisma to throw an error
    mockedPrisma.invoice.findUnique.mockRejectedValue(new Error('Database error'));

    const req = new Request('http://localhost/invoice/reset', {
      method: 'POST',
      body: JSON.stringify({ invoiceId: 777 }),
    });

    const res = await POST(req);
    expect(res.status).toBe(500);

    const json = await res.json();
    expect(json).toEqual({ error: 'Database error' });
  });
});
