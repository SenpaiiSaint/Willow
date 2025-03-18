'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PaymentForm from '../components/PaymentForm';
import { motion } from 'framer-motion';

interface Invoice {
  id: number;
  amount: number;
  paidAmount: number;
  status: string;
}

interface Tenant {
  id: number;
  name: string;
  email: string;
  invoices: Invoice[];
}

export default function Dashboard() {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the backend
  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      // For demonstration, we're using tenant ID 1
      const res = await fetch('/api/tenant/1');
      if (!res.ok) throw new Error('Failed to fetch tenant data');
      const data = await res.json();
      setTenant(data);
      setInvoices(data.invoices || []);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  // Reset invoice to unpaid
  async function handleResetInvoice(invoiceId: number) {
    try {
      const res = await fetch('/api/invoice/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invoiceId }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to reset invoice');
      }
      await fetchData(); // Refresh the invoice list
      alert('Invoice reset successfully!');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Simple Navigation */}
      <div className="mb-4">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-stone-900">Tenant Dashboard</h1>

      {loading && <p className="text-center text-stone-600">Loading...</p>}

      {error && (
        <motion.p
          className="text-center text-red-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ {error}
        </motion.p>
      )}

      {tenant && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* Tenant Info */}
          <div className="bg-stone-100 p-6 rounded-lg shadow-md">
            <p className="mb-2">
              <strong>Name:</strong> {tenant.name}
            </p>
            <p>
              <strong>Email:</strong> {tenant.email}
            </p>
          </div>

          {/* Payment Form */}
          <PaymentForm tenantId={tenant.id} refreshData={fetchData} />

          {/* Invoice List */}
          {invoices.length > 0 ? (
            <div className="mt-4">
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
                  {/* Reset Button if invoice is PAID */}
                  {inv.status === 'PAID' && (
                    <button
                      onClick={() => handleResetInvoice(inv.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      Reset Invoice
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-600">No invoices found.</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
