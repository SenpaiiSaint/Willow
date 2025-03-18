'use client';

import { motion } from 'framer-motion';

interface Invoice {
  id: number;
  amount: number;
  paidAmount: number;
  status: string;
}

interface InvoiceListProps {
  invoices: Invoice[];
}

export default function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <motion.div
      className="mt-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <h2 className="text-xl font-semibold mb-2">Invoices</h2>
      {invoices.map((inv) => (
        <div
          key={inv.id}
          className="p-4 border rounded bg-white shadow mb-2 flex justify-between items-center"
        >
          <div>
            <p><strong>Amount:</strong> ${inv.amount}</p>
            <p><strong>Paid:</strong> ${inv.paidAmount}</p>
            <p><strong>Status:</strong> {inv.status}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
