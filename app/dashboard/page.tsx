"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

interface Invoice {
  paidAmount: string;   // comes back as a stringified Decimal
  status: string;
}

interface Tenant {
  id: string;
  invoices: Invoice[];
}

interface DashboardStats {
  totalTenants: number;
  totalInvoices: number;
  totalRevenue: number;
  pendingInvoices: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalTenants: 0,
    totalInvoices: 0,
    totalRevenue: 0,
    pendingInvoices: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/tenant", {
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Failed to fetch tenants");
        }
        const tenants: Tenant[] = await res.json();

        // Compute metrics
        const totalTenants = tenants.length;
        const allInvoices = tenants.flatMap((t) => t.invoices);

        const totalInvoices = allInvoices.length;
        const totalRevenue = allInvoices.reduce(
          (sum, inv) => sum + Number(inv.paidAmount),
          0
        );
        const pendingInvoices = allInvoices.filter(
          (inv) => inv.status === "UNPAID"
        ).length;

        setStats({ totalTenants, totalInvoices, totalRevenue, pendingInvoices });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      name: "Total Tenants",
      value: stats.totalTenants,
      icon: UserGroupIcon,
      change: "+4.75%",
      changeType: "positive",
    },
    {
      name: "Total Revenue",
      value: `$${stats.totalRevenue.toFixed(2)}`,
      icon: CurrencyDollarIcon,
      change: "+54.02%",
      changeType: "positive",
    },
    {
      name: "Total Invoices",
      value: stats.totalInvoices,
      icon: DocumentTextIcon,
      change: "-1.39%",
      changeType: "negative",
    },
    {
      name: "Pending Invoices",
      value: stats.pendingInvoices,
      icon: ClockIcon,
      change: "+10.18%",
      changeType: "negative",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="text-xl font-bold text-blue-600">
                RentPlatform
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/dashboard"
                  className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/tenants"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Tenants
                </Link>
                <Link
                  href="/dashboard/invoices"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Invoices
                </Link>
                <Link
                  href="/dashboard/payments"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Payments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((card) => (
            <div
              key={card.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5 flex items-center">
                <card.icon className="h-6 w-6 text-gray-400" aria-hidden />
                <div className="ml-5">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {card.name}
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {card.value}
                  </dd>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span
                    className={`font-medium ${
                      card.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {card.change}
                  </span>{" "}
                  <span className="text-gray-500">from last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity Placeholder */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {/* TODO: Map over real activity once you have an endpoint */}
              <li className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    New invoice created
                  </p>
                  <p className="text-sm text-gray-500">
                    Invoice #1234 for $500.00
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
