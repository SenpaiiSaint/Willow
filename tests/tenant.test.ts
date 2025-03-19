import { GET } from '@/app/api/tenant/[id]/route';
import prisma from '@/lib/prisma';

// Mock prisma to control its behavior in tests
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    tenant: {
      findUnique: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe('Tenant API Route Handler', () => {
  const mockedPrisma = prisma as any;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET', () => {
    it('should return tenant data when tenant exists', async () => {
      const tenantData = {
        id: 1,
        name: 'Tenant 1',
        email: 'tenant1@example.com',
        invoices: [],
        payments: [],
      };

      // Mock the Prisma call to return tenantData
      mockedPrisma.tenant.findUnique.mockResolvedValue(tenantData);

      const req = new Request('http://localhost/api/tenant/1', { method: 'GET' });
      // The route handler expects params as a Promise resolving to an object with id as a string.
      const context = { params: Promise.resolve({ id: '1' }) };

      const res = await GET(req, context);
      const json = await res.json();

      expect(res.status).toBe(200);
      expect(json).toEqual(tenantData);
    });

    it('should return 404 when tenant does not exist', async () => {
      // Simulate no tenant found
      mockedPrisma.tenant.findUnique.mockResolvedValue(null);

      const req = new Request('http://localhost/api/tenant/999', { method: 'GET' });
      const context = { params: Promise.resolve({ id: '999' }) };

      const res = await GET(req, context);
      const json = await res.json();

      expect(res.status).toBe(404);
      expect(json).toEqual({ error: 'Tenant not found' });
    });

    it('should return 400 for an invalid tenant id', async () => {
      const req = new Request('http://localhost/api/tenant/abc', { method: 'GET' });
      const context = { params: Promise.resolve({ id: 'abc' }) };

      const res = await GET(req, context);
      const json = await res.json();

      expect(res.status).toBe(400);
      expect(json).toEqual({ error: 'Invalid tenant ID' });
    });
  });
});
