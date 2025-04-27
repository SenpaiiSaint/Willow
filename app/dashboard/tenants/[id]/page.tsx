'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  address: string;
  rentAmount: number;
  leaseStart: string;
  leaseEnd: string;
}

export default function TenantDetailsPage({ params }: { params: { id: string } }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTenant = async () => {
      try {
        const response = await fetch(`/api/tenant/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch tenant');
        const data = await response.json();
        setTenant(data);
      } catch (error) {
        console.error('Error fetching tenant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTenant();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!tenant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Tenant not found</h1>
          <Link href="/dashboard/tenants" className="text-blue-600 hover:text-blue-800">
            Back to Tenants List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tenant Details</h1>
        <div className="space-x-4">
          <button
            onClick={() => router.push(`/dashboard/tenants/${params.id}/edit`)}
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

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-sm text-gray-900">{tenant.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">{tenant.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-sm text-gray-900">{tenant.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <span className={`mt-1 inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                  tenant.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {tenant.status}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Lease Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <p className="mt-1 text-sm text-gray-900">{tenant.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rent Amount</label>
                <p className="mt-1 text-sm text-gray-900">${tenant.rentAmount.toFixed(2)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lease Start</label>
                <p className="mt-1 text-sm text-gray-900">{new Date(tenant.leaseStart).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lease End</label>
                <p className="mt-1 text-sm text-gray-900">{new Date(tenant.leaseEnd).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 