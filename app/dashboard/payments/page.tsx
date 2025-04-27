'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Invoice {
  id: string;
  tenantId: string;
  tenantName: string;
  amount: number;
  dueDate: string;
  status: string;
}

export default function PaymentsPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch('/api/invoice');
        if (!response.ok) throw new Error('Failed to fetch invoices');
        const data = await response.json();
        setInvoices(data.filter((invoice: Invoice) => invoice.status !== 'paid'));
      } catch (error) {
        console.error('Error fetching invoices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInvoice || !paymentAmount) return;

    setProcessing(true);
    try {
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoiceId: selectedInvoice,
          amount: parseFloat(paymentAmount),
        }),
      });

      if (!response.ok) throw new Error('Payment failed');
      
      // Refresh the page to show updated invoice status
      router.refresh();
      setSelectedInvoice('');
      setPaymentAmount('');
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Make a Payment</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label htmlFor="invoice" className="block text-sm font-medium text-gray-700">
                Select Invoice
              </label>
              <select
                id="invoice"
                value={selectedInvoice}
                onChange={(e) => setSelectedInvoice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select an invoice</option>
                {invoices.map((invoice) => (
                  <option key={invoice.id} value={invoice.id}>
                    {invoice.tenantName} - ${invoice.amount.toFixed(2)} (Due: {new Date(invoice.dueDate).toLocaleDateString()})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Payment Amount
              </label>
              <input
                type="number"
                id="amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter payment amount"
                required
                min="0.01"
                step="0.01"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={processing}
                className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                  processing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {processing ? 'Processing...' : 'Make Payment'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices
                  .filter((invoice) => invoice.status === 'paid')
                  .map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {invoice.tenantName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${invoice.amount.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(invoice.dueDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Paid
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 