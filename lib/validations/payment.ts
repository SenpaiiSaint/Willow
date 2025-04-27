import { z } from 'zod';

export const createPaymentSchema = z.object({
  tenantId: z.string().uuid(),
  amount: z.number().positive(),
  invoiceId: z.string().uuid().optional(),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>; 