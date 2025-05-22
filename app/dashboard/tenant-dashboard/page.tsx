"use client";
import { useEffect, useState, useMemo } from "react";
import { getTenants } from "@/data/tenants/tenants";
import type { Tenant } from "@/data/tenants/schema";
import { Card } from "@/app/components/Card";
import { Badge } from "@/app/components/Badge";
import { ProgressCircle } from "@/app/components/ProgressCircle";
import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { Textarea } from "@/app/components/Textarea";
import { Label } from "@/app/components/Label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogBody,
  DialogTrigger,
} from "@/app/components/Dialog";
import { getFinancialData } from "@/data/financials/financial";
import { getMaintenanceData } from "@/data/maintenance/maintenance";
import type { MaintenanceData } from "@/data/maintenance/schema";
import type { FinancialData } from "@/data/financials/schema";
import { cx } from "@/lib/utils";
import { Notifications } from "@/app/components/ui/Notifications";
import Link from "next/link";
import { RiMenuFoldLine, RiMenuUnfoldLine, RiWallet3Line, RiToolsLine, RiMailLine, RiFileList3Line, RiShieldCheckLine, RiHome6Line, RiUser3Line, RiQuestionLine, RiLogoutBoxLine, RiArrowRightSLine, RiExternalLinkLine } from "@remixicon/react";
import { Avatar } from "@/app/components/Avatar";
import createGlobe from 'cobe';
import { useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/Tabs";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "@/app/components/Table";
import { CategoryBar } from "@/app/components/CategoryBar";
import { Divider } from "@/app/components/Divider";
import { DonutChart } from "@/app/components/DonutChart";
import { AccountActivityCard } from "@/app/components/AccountActivityCard";
import { MaintenanceRequestOverview } from "@/app/components/MaintenanceRequestOverview";
import { GlobeFeatureSection } from "../../components/GlobeFeatureSection";
import { GreetingBanner } from "../../components/GreetingBanner";

export default function TenantDashboardPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceData[]>([]);
  const [financials, setFinancials] = useState<FinancialData[]>([]);
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  const [showPayDialog, setShowPayDialog] = useState(false);
  const [requestDesc, setRequestDesc] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [currentTenantId, setCurrentTenantId] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    getTenants().then((data) => {
      setTenants(data);
      if (data.length > 0) {
        const randomTenant = data[Math.floor(Math.random() * data.length)];
        setCurrentTenantId(randomTenant.id);
      }
    });
    getMaintenanceData().then(setMaintenanceRequests);
    getFinancialData().then(setFinancials);
  }, []);

  const tenant = tenants.find(t => t.id === currentTenantId);

  // Always define these before any conditional return
  const myRequests = tenant ? maintenanceRequests.filter((r) => r.tenantId === tenant.id) : [];
  const myRents = tenant ? financials.filter(
    (f) => f.propertyId === tenant.propertyId && f.type === "rent"
  ) : [];
  const latestRent = myRents.length > 0 ? myRents[myRents.length - 1] : null;

  const isRentOverdue = useMemo(() => {
    return latestRent && latestRent.isLate;
  }, [latestRent]);
  const scheduledMaintenance = useMemo(() => {
    return myRequests.find(r => r.status === "in_progress");
  }, [myRequests]);

  if (!tenant) return <div className="text-red-500 p-8">No tenant data found.</div>;

  // Lease progress calculation
  const leaseStart = new Date(tenant.leaseStart);
  const leaseEnd = new Date(tenant.leaseEnd);
  const now = new Date();
  const leaseProgress = Math.min(
    100,
    Math.max(
      0,
      ((now.getTime() - leaseStart.getTime()) /
        (leaseEnd.getTime() - leaseStart.getTime())) *
        100
    )
  );

  // Greeting helper
  function getGreeting(name: string) {
    const hour = new Date().getHours();
    const firstName = name.split(" ")[0];
    const message = "Refresh the page to see a different tenant."
    if (hour < 12) return `Good morning, ${firstName}!\n${message}`;
    if (hour < 18) return `Good afternoon, ${firstName}!\n${message}`;
    return `Good evening, ${firstName}!\n${message}`;
  }

  // Handlers
  function handleRequestSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!tenant) return;
    // Simulate adding a request
    setMaintenanceRequests((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        propertyId: tenant.propertyId,
        tenantId: tenant.id,
        description: requestDesc,
        status: "open",
        createdAt: new Date().toISOString(),
      },
    ]);
    setRequestDesc("");
    setShowRequestDialog(false);
  }

  function handlePayRent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setShowPayDialog(false);
      // In real app, mark rent as paid
    }, 1200);
  }

  // Helper for initials
  const getInitials = (name: string) => name.split(" ").map(n => n[0]).join("").toUpperCase();

  // Capital analytics demo data (tailored for tenant)
  const capitalData: Array<{
    date: string;
    description: string;
    type: string;
    amount: string;
    changeType: "positive" | "negative";
  }> = [
    {
      date: "May 24",
      description: "Deposit refund processed",
      type: "Deposit Refund",
      amount: "-$500",
      changeType: "negative",
    },
    {
      date: "Apr 24",
      description: "Credit applied for maintenance inconvenience",
      type: "Credit",
      amount: "+$100",
      changeType: "positive",
    },
    {
      date: "Mar 24",
      description: "Deposit hold for pet fee",
      type: "Hold",
      amount: "-$200",
      changeType: "negative",
    },
    {
      date: "Feb 24",
      description: "Security deposit received",
      type: "Deposit",
      amount: "+$1,000",
      changeType: "positive",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row">
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
        <button
          className="p-2 rounded hover:bg-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <RiMenuUnfoldLine className="size-6" /> : <RiMenuFoldLine className="size-6" />}
        </button>
        <span className="font-bold text-lg truncate flex-1 text-center">{tenant.name}</span>
        <Notifications />
      </div>
      {/* Sidebar (hidden on mobile unless open) */}
      <aside
        className={cx(
          "bg-gray-900 border-r border-gray-800 flex-shrink-0 flex flex-col min-h-screen transition-all duration-300 z-30 overflow-y-auto relative",
          collapsed ? "w-16" : "w-64",
          "hidden md:flex"
        )}
      >
        <div className="flex items-center gap-2 px-2 py-6 border-b border-gray-800 justify-between">
          <button
            className="p-2 rounded hover:bg-gray-800 focus:outline-none"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <RiMenuUnfoldLine className="size-5" /> : <RiMenuFoldLine className="size-5" />}
          </button>
          {!collapsed && (
            <>
              <span className="font-bold text-lg truncate flex-1 transition-all duration-300">{tenant.name}</span>
              <Notifications />
            </>
          )}
        </div>
        <div className="flex-1">
          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-1">
              <li>
                <Link href="/dashboard/tenant-payment" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiWallet3Line className="size-5" />
                  {!collapsed && "Payments"}
                </Link>
              </li>
              <li>
                <Link href="#maintenance" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiToolsLine className="size-5" />
                  {!collapsed && "Maintenance"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiMailLine className="size-5" />
                  {!collapsed && "Contact Us"}
                </Link>
              </li>
              <li>
                <Link href="#documents" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiFileList3Line className="size-5" />
                  {!collapsed && "Shared Documents"}
                </Link>
              </li>
              <li>
                <Link href="#insurance" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiShieldCheckLine className="size-5" />
                  {!collapsed && "Insurance"}
                </Link>
              </li>
              <li>
                <Link href="#property" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiHome6Line className="size-5" />
                  {!collapsed && "Property Details"}
                </Link>
              </li>
              <li>
                <Link href="#profile" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiUser3Line className="size-5" />
                  {!collapsed && "Account Profile"}
                </Link>
              </li>
              <li>
                <Link href="#help" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                  <RiQuestionLine className="size-5" />
                  {!collapsed && "Help"}
                </Link>
              </li>
              <li>
                <Link href="/signIn" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800 text-red-400">
                  <RiLogoutBoxLine className="size-5" />
                  {!collapsed && "Log Out"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Sidebar Footer */}
        <div className="relative z-10 px-2 py-4 text-xs text-gray-500 flex flex-col items-center">
          <div className="mb-2">
            {/* Replace with your logo if desired */}
            <span className="font-bold text-blue-400">Willow</span>
          </div>
          <div>&copy; {new Date().getFullYear()}  DESIGNED BY: BlueSky Labs</div>
        </div>
        {/* Gradient Fade at Bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-900 to-transparent z-0" />
      </aside>
      {/* Mobile Drawer Sidebar */}
      {mobileMenuOpen && (
        <aside className="fixed inset-0 z-40 flex md:hidden">
          <div className="relative w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full min-h-screen">
            <div className="flex items-center gap-2 px-2 py-6 border-b border-gray-800 justify-between">
              <button
                className="p-2 rounded hover:bg-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <RiMenuUnfoldLine className="size-5" />
              </button>
              <span className="font-bold text-lg truncate flex-1">{tenant.name}</span>
              <Notifications />
            </div>
            <nav className="flex-1 px-2 py-4">
              <ul className="space-y-1">
                <li>
                  <Link href="#payments" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiWallet3Line className="size-5" />
                    {!collapsed && "Payments"}
                  </Link>
                </li>
                <li>
                  <Link href="#maintenance" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiToolsLine className="size-5" />
                    {!collapsed && "Maintenance"}
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiMailLine className="size-5" />
                    {!collapsed && "Contact Us"}
                  </Link>
                </li>
                <li>
                  <Link href="#documents" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiFileList3Line className="size-5" />
                    {!collapsed && "Shared Documents"}
                  </Link>
                </li>
                <li>
                  <Link href="#insurance" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiShieldCheckLine className="size-5" />
                    {!collapsed && "Insurance"}
                  </Link>
                </li>
                <li>
                  <Link href="#property" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiHome6Line className="size-5" />
                    {!collapsed && "Property Details"}
                  </Link>
                </li>
                <li>
                  <Link href="#profile" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiUser3Line className="size-5" />
                    {!collapsed && "Account Profile"}
                  </Link>
                </li>
                <li>
                  <Link href="#help" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800">
                    <RiQuestionLine className="size-5" />
                    {!collapsed && "Help"}
                  </Link>
                </li>
                <li>
                  <Link href="/signIn" className="flex items-center gap-3 rounded px-4 py-2 hover:bg-gray-800 text-red-400">
                    <RiLogoutBoxLine className="size-5" />
                    {!collapsed && "Log Out"}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Overlay to close menu */}
          <div className="flex-1 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
        </aside>
      )}
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-8 w-full max-w-7xl mx-auto">
        {/* Greeting and avatar */}
        <GreetingBanner name={tenant.name} greeting={getGreeting(tenant.name)} />
        {/* Announcements/alerts */}
        {showAlert && (isRentOverdue || scheduledMaintenance) && (
          <div className="flex flex-col sm:flex-row items-center bg-red-100 text-red-800 px-4 py-2 rounded mb-4 gap-2 sm:gap-0">
            <span className="flex-1">
              {isRentOverdue && "Your rent is overdue! Please pay as soon as possible."}
              {scheduledMaintenance && !isRentOverdue && `Scheduled maintenance: ${scheduledMaintenance.description}`}
            </span>
            <button onClick={() => setShowAlert(false)} className="sm:ml-4 text-red-500 hover:text-red-700">✕</button>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        </div>
        <AccountActivityCard />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col">
            <MaintenanceRequestOverview />
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <Card className="sm:mx-auto sm:max-w-xl mb-8 p-6 h-full flex flex-col">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-1">
                Expense allocation
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                See how your monthly costs break down by category.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Chart */}
                <div className="w-full sm:w-1/2 flex justify-center">
                  <DonutChart
                    data={[
                      { name: 'Rent', amount: 1200 },
                      { name: 'Utilities', amount: 250 },
                      { name: 'Insurance', amount: 100 },
                      { name: 'Maintenance', amount: 80 },
                      { name: 'Other', amount: 50 },
                    ]}
                    value="amount"
                    category="name"
                    valueFormatter={(n: number) => '$' + Intl.NumberFormat('us').format(n)}
                    showTooltip={false}
                    className="mx-auto h-40"
                    showLabel={true}
                    colors={['blue', 'cyan', 'violet', 'fuchsia', 'emerald']}
                  />
                </div>
                {/* Divider for desktop */}
                <div className="hidden sm:block w-px bg-gray-200 dark:bg-gray-800 h-32 mx-2" />
                {/* Legend */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                  <ul role="list" className="space-y-2">
                    {(() => {
                      const data = [
                        { name: 'Rent', amount: 1200, color: 'bg-blue-500' },
                        { name: 'Utilities', amount: 250, color: 'bg-cyan-500' },
                        { name: 'Insurance', amount: 100, color: 'bg-violet-500' },
                        { name: 'Maintenance', amount: 80, color: 'bg-fuchsia-500' },
                        { name: 'Other', amount: 50, color: 'bg-emerald-500' },
                      ];
                      const total = data.reduce((sum, d) => sum + d.amount, 0);
                      return data.map((item: { name: string; amount: number; color: string }) => (
                        <li key={item.name} className="flex items-center gap-3">
                          <span className={cx(item.color, 'inline-block size-3 rounded-full')} />
                          <span className="flex-1 text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-50 tabular-nums">
                            {'$' + Intl.NumberFormat('us').format(item.amount)}
                          </span>
                          <span className="ml-2 text-xs text-gray-400 tabular-nums">
                            {((item.amount / total) * 100).toFixed(1)}%
                          </span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* Globe and Feature Card Section */}
        <GlobeFeatureSection />
      </main>
    </div>
  );
}

