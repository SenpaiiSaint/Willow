'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils/format';

interface Invoice {
  id: string;
  amount: string;      // Decimal comes back as string
  paidAmount: string;  // Decimal string
  status: string;
  dueDate: string;
}

interface Payment {
  id: string;
  amount: string;      // Decimal string
  status: string;
  createdAt: string;
}

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  status: string;
  address: string;
  rentAmount: string;    // Decimal string
  leaseStart: string;
  leaseEnd: string;
  invoices: Invoice[];
  payments: Payment[];
}

interface TenantDetailsClientProps {
  tenantId: string;
}

export default function TenantDetailsClient({ tenantId }: TenantDetailsClientProps) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const res = await fetch(`/api/tenant/${tenantId}`);
        if (!res.ok) throw new Error('Failed to fetch tenant');
        const data = await res.json();

        // Flatten property.address, keep invoices + payments
        const {
          property,
          invoices = [],
          payments = [],
          ...rest
        } = data;

        setTenant({
          ...rest,
          address: property?.address || '',
          invoices,
          payments,
        });
      } catch (err) {
        console.error('Error fetching tenant:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTenant();
  }, [tenantId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!tenant) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Tenant not found</h1>
        <Link href="/dashboard/tenants" className="text-blue-600 hover:text-blue-800">
          ← Back to Tenants List
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tenant Details</h1>
        <div className="space-x-4">
          <button
            onClick={() => router.push(`/dashboard/tenants/${tenant.id}/edit`)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Tenant
          </button>
          <Link
            href="/dashboard/tenants"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to List
          </Link>
        </div>
      </div>

      {/* Personal & Lease Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <dl className="space-y-4">
            <div>
              <dt className="font-medium text-gray-700">Name</dt>
              <dd className="mt-1 text-gray-900">{tenant.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Email</dt>
              <dd className="mt-1 text-gray-900">{tenant.email}</dd>
            </div>
            {tenant.phone && (
              <div>
                <dt className="font-medium text-gray-700">Phone</dt>
                <dd className="mt-1 text-gray-900">{tenant.phone}</dd>
              </div>
            )}
            <div>
              <dt className="font-medium text-gray-700">Status</dt>
              <dd>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    tenant.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {tenant.status}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Lease Information</h2>
          <dl className="space-y-4">
            <div>
              <dt className="font-medium text-gray-700">Address</dt>
              <dd className="mt-1 text-gray-900">{tenant.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Rent Amount</dt>
              <dd className="mt-1 text-gray-900">
                {formatCurrency(Number(tenant.rentAmount))}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Lease Start</dt>
              <dd className="mt-1 text-gray-900">
                {new Date(tenant.leaseStart).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Lease End</dt>
              <dd className="mt-1 text-gray-900">
                {new Date(tenant.leaseEnd).toLocaleDateString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Invoices */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Invoices</h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['ID', 'Amount', 'Paid', 'Status', 'Due Date'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tenant.invoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{inv.id}</td>
                  <td className="px-6 py-4 text-sm">{formatCurrency(Number(inv.amount))}</td>
                  <td className="px-6 py-4 text-sm">{formatCurrency(Number(inv.paidAmount))}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        inv.status === 'PAID'
                          ? 'bg-green-100 text-green-800'
                          : inv.status === 'PARTIALLY_PAID'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(inv.dueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payments */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Payments</h2>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['ID', 'Amount', 'Status', 'Date'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tenant.payments.map((p) => (
                <tr key={p.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{p.id}</td>
                  <td className="px-6 py-4 text-sm">{formatCurrency(Number(p.amount))}</td>
                  <td className="px-6 py-4 text-sm">{p.status}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(p.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 