import { z } from 'zod';

export const createInvoiceSchema = z.object({
  tenantId: z.string().uuid(),
  propertyId: z.string().uuid(),
  amount: z.number().positive(),
  dueDate: z.string().datetime(),
  description: z.string().optional(),
});

export const updateInvoiceSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().positive().optional(),
  dueDate: z.string().datetime().optional(),
  status: z.enum(['PENDING', 'PAID', 'FAILED']).optional(),
  description: z.string().optional(),
});

export type CreateInvoiceInput = z.infer<typeof createInvoiceSchema>;
export type UpdateInvoiceInput = z.infer<typeof updateInvoiceSchema>; 