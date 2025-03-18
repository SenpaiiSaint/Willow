"use client";

import { motion } from "framer-motion";

interface Invoice {
  id: number;
  amount: number;
  paidAmount: number;
  status: string;
}

interface InvoiceListProps {
  invoices?: Invoice[];
}

export default function InvoiceList({ invoices = [] }: InvoiceListProps) {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-xl font-semibold mb-4">Invoices</h2>
      {invoices.length > 0 ? (
        <motion.ul
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {invoices.map((invoice) => (
            <motion.li
              key={invoice.id}
              className="p-4 border rounded bg-stone-50 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>
                <strong>Amount:</strong> ${invoice.amount}
              </p>
              <p>
                <strong>Paid:</strong> ${invoice.paidAmount}
              </p>
              <p>
                <strong>Status:</strong> {invoice.status}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p>No invoices available.</p>
      )}
    </motion.div>
  );
}
