'use client';

import { useEffect, useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import InvoiceList from '../components/InvoiceList';
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
      const res = await fetch('/api/tenant/1'); // Example for tenant ID 1
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
            <InvoiceList invoices={invoices} />
          ) : (
            <p className="text-center text-stone-600">No invoices found.</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
