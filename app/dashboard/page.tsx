"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ClockIcon,
  UserCircleIcon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { formatCurrency } from "@/lib/utils/format";

interface Invoice {
  paidAmount: string;   // comes back as a stringified Decimal
  status: string;
}

interface Tenant {
  id: string;
  invoices: Invoice[];
}

interface DashboardStats {
  totalProperties: number;
  totalTenants: number;
  activeLeases: number;
  upcomingPayments: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProperties: 0,
    totalTenants: 0,
    activeLeases: 0,
    upcomingPayments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/dashboard/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard stats');
        }

        const data = await response.json();
        setStats(data);
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
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  const statsCards = [
    {
      name: "Total Properties",
      value: stats.totalProperties,
      icon: BuildingOfficeIcon,
      change: "+4.75%",
      changeType: "positive",
      gradient: "from-blue-100 to-blue-50",
      iconColor: "text-blue-600",
    },
    {
      name: "Total Tenants",
      value: stats.totalTenants,
      icon: UsersIcon,
      change: "+54.02%",
      changeType: "positive",
      gradient: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600",
    },
    {
      name: "Active Leases",
      value: stats.activeLeases,
      icon: DocumentTextIcon,
      change: "-1.39%",
      changeType: "negative",
      gradient: "from-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      name: "Upcoming Payments",
      value: stats.upcomingPayments,
      icon: ClockIcon,
      change: "+10.18%",
      changeType: "negative",
      gradient: "from-pink-100 to-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Tenants', href: '/dashboard/tenants', icon: UsersIcon },
    { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentTextIcon },
    { name: 'Payments', href: '/dashboard/payments', icon: CreditCardIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  RentPay
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      <item.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                  </button>
                </div>
                {isProfileMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Admin User</p>
                      <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                    <Link
                      href="/dashboard/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      href="/auth/signout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <UserCircleIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Admin User</div>
                <div className="text-sm font-medium text-gray-500">admin@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="/auth/signout"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back! Here&apos;s what&apos;s happening with your properties.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((card) => (
            <div
              key={card.name}
              className="bg-white/80 backdrop-blur-sm overflow-hidden shadow rounded-lg hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-5 flex items-center">
                <div className={`p-3 rounded-full bg-gradient-to-r ${card.gradient} ring-1 ring-${card.iconColor.replace('text-', '')}-200`}>
                  <card.icon className={`h-6 w-6 ${card.iconColor}`} aria-hidden="true" />
                </div>
                <div className="ml-5">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {card.name}
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {card.value}
                  </dd>
                </div>
              </div>
              <div className={`bg-gradient-to-r ${card.gradient} px-5 py-3 border-t border-${card.iconColor.replace('text-', '')}-200`}>
                <div className="text-sm">
                  <span
                    className={`font-medium ${
                      card.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {card.changeType === "positive" ? (
                      <ArrowTrendingUpIcon className="h-4 w-4 inline mr-1" />
                    ) : (
                      <ArrowTrendingDownIcon className="h-4 w-4 inline mr-1" />
                    )}
                    {card.change}
                  </span>{" "}
                  <span className="text-gray-500">from last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recent Activity
            </h2>
            <div className="mt-4 overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                <li className="px-6 py-4 flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-colors duration-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      New invoice created
                    </p>
                    <p className="text-sm text-gray-500">
                      Invoice #1234 for $500.00
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-green-100 to-green-50 text-green-800 ring-1 ring-green-200">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Completed
                  </span>
                </li>
                <li className="px-6 py-4 flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-colors duration-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Payment received
                    </p>
                    <p className="text-sm text-gray-500">
                      Payment #5678 for $1,200.00
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 ring-1 ring-blue-200">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    Processed
                  </span>
                </li>
                <li className="px-6 py-4 flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-colors duration-200">
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      New tenant added
                    </p>
                    <p className="text-sm text-gray-500">
                      John Doe - Unit 101
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 ring-1 ring-purple-200">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    New
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
