"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  BuildingOfficeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { formatCurrency } from "@/lib/utils/format";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  organizationId?: string;
  organizationName?: string;
}

interface DashboardStats {
  totalOrganizations?: number;
  totalProperties?: number;
  totalUsers?: number;
  totalRevenue?: number;
  activeSubscriptions?: number;
  systemHealth?: {
    status: 'healthy' | 'warning' | 'critical';
    message: string;
  };
  totalTenants?: number;
  activeLeases?: number;
  upcomingPayments?: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({});
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user data from localStorage
        const userData = localStorage.getItem('user');
        if (!userData) {
          console.log('No user data found in localStorage');
          router.push('/login');
          return;
        }

        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        // Get token from cookie
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
        const tokenDebugCookie = cookies.find(cookie => cookie.trim().startsWith('token_debug='));
        
        console.log('Token cookies present:', {
          token: !!tokenCookie,
          tokenDebug: !!tokenDebugCookie
        });

        // Use either token
        const token = tokenCookie?.split('=')[1] || tokenDebugCookie?.split('=')[1];

        if (!token) {
          console.log('No token found in cookies');
          localStorage.removeItem('user');
          router.push('/login');
          return;
        }

        // Fetch dashboard stats
        const response = await fetch('/api/dashboard/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (!response.ok) {
          if (response.status === 401) {
            console.log('Unauthorized response from stats API');
            localStorage.removeItem('user');
            router.push('/login');
            return;
          }
          throw new Error('Failed to fetch dashboard stats');
        }

        const data = await response.json();
        console.log('Dashboard stats fetched successfully');
        setStats(data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError(err instanceof Error ? err.message : "Failed to load data");
        localStorage.removeItem('user');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

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

  const getRoleSpecificStats = () => {
    if (!user) return [];

    switch (user.role) {
      case 'ADMIN':
        return [
          {
            name: "Total Organizations",
            value: stats.totalOrganizations || 0,
            icon: BuildingOfficeIcon,
            gradient: "from-blue-100 to-blue-50",
            iconColor: "text-blue-600",
          },
          {
            name: "Total Properties",
            value: stats.totalProperties || 0,
            icon: HomeIcon,
            gradient: "from-purple-100 to-purple-50",
            iconColor: "text-purple-600",
          },
          {
            name: "Total Users",
            value: stats.totalUsers || 0,
            icon: UsersIcon,
            gradient: "from-indigo-100 to-indigo-50",
            iconColor: "text-indigo-600",
          },
          {
            name: "Total Revenue",
            value: formatCurrency(stats.totalRevenue || 0),
            icon: CurrencyDollarIcon,
            gradient: "from-green-100 to-green-50",
            iconColor: "text-green-600",
          },
          {
            name: "Active Subscriptions",
            value: stats.activeSubscriptions || 0,
            icon: CreditCardIcon,
            gradient: "from-yellow-100 to-yellow-50",
            iconColor: "text-yellow-600",
          },
          {
            name: "System Health",
            value: stats.systemHealth?.status ? stats.systemHealth.status.charAt(0).toUpperCase() + stats.systemHealth.status.slice(1) : 'Healthy',
            icon: CheckCircleIcon,
            gradient: stats.systemHealth?.status === 'healthy' 
              ? "from-green-100 to-green-50" 
              : stats.systemHealth?.status === 'warning'
              ? "from-yellow-100 to-yellow-50"
              : "from-red-100 to-red-50",
            iconColor: stats.systemHealth?.status === 'healthy'
              ? "text-green-600"
              : stats.systemHealth?.status === 'warning'
              ? "text-yellow-600"
              : "text-red-600",
          }
        ];
      default:
        return [
          {
            name: "Total Properties",
            value: stats.totalProperties || 0,
            icon: BuildingOfficeIcon,
            gradient: "from-blue-100 to-blue-50",
            iconColor: "text-blue-600",
          },
          {
            name: "Total Tenants",
            value: stats.totalTenants || 0,
            icon: UsersIcon,
            gradient: "from-purple-100 to-purple-50",
            iconColor: "text-purple-600",
          },
          {
            name: "Active Leases",
            value: stats.activeLeases || 0,
            icon: DocumentTextIcon,
            gradient: "from-indigo-100 to-indigo-50",
            iconColor: "text-indigo-600",
          },
          {
            name: "Upcoming Payments",
            value: stats.upcomingPayments || 0,
            icon: ClockIcon,
            gradient: "from-pink-100 to-pink-50",
            iconColor: "text-pink-600",
          },
        ];
    }
  };

  const getRoleSpecificNavigation = () => {
    if (!user) return [];

    switch (user.role) {
      case 'ADMIN':
        return [
          { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
          { name: 'Organizations', href: '/dashboard/organizations', icon: BuildingOfficeIcon },
          { name: 'Users', href: '/dashboard/users', icon: UsersIcon },
          { name: 'Properties', href: '/dashboard/properties', icon: HomeIcon },
          { name: 'Billing', href: '/dashboard/billing', icon: CreditCardIcon },
          { name: 'System', href: '/dashboard/system', icon: CheckCircleIcon },
        ];
      default:
        return [
          { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
          { name: 'Tenants', href: '/dashboard/tenants', icon: UsersIcon },
          { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentTextIcon },
          { name: 'Payments', href: '/dashboard/payments', icon: CreditCardIcon },
        ];
    }
  };

  const statsCards = getRoleSpecificStats();
  const navigation = getRoleSpecificNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Navigation */}
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
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
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
                    <button
                      onClick={() => {
                        localStorage.removeItem('user');
                        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                        router.push('/login');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {user?.role === 'ADMIN' ? 'System Dashboard' : 'Dashboard'}
              </h1>
              <p className="text-sm text-gray-500">
                {user?.role === 'ADMIN' 
                  ? 'Welcome back! Here\'s an overview of your rental platform.'
                  : 'Welcome back! Here\'s what\'s happening with your properties.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {statsCards.map((item) => (
              <div
                key={item.name}
                className={`bg-gradient-to-br ${item.gradient} rounded-lg shadow-sm p-6`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 p-3 rounded-md ${item.iconColor} bg-white/50`}>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{item.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {user?.role === 'ADMIN' && (
            <div className="mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  System Status
                </h2>
                <div className="mt-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    stats.systemHealth?.status === 'healthy'
                      ? 'bg-green-100 text-green-800'
                      : stats.systemHealth?.status === 'warning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {stats.systemHealth?.message || 'All systems operational'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
