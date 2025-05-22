'use client';

import { useEffect, useState } from "react";
import { Notifications } from "@/app/components/ui/Notifications";
import { UserProfile } from "../components/ui/UserProfile";
import { TicketDrawer } from "@/app/components/ui/TicketDrawer";
import { Card } from "@/app/components/Card";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { columnsMaintenance } from "@/app/components/ui/data-table/columnsMaintenance";
import { Badge } from "@/app/components/Badge";
import { ProgressCircle } from "@/app/components/ProgressCircle";
import { LineChart } from "@/app/components/LineChart";
import { Button } from "@/app/components/Button";
import { TabNavigation, TabNavigationLink } from "@/app/components/TabNavigation";
import { getProperties } from "../../data/properties/properties";
import { getTenants } from "../../data/tenants/tenants";
import { getMaintenanceData } from "../../data/maintenance/maintenance";
import { getFinancialData } from "../../data/financials/financial";
import type { Property } from "../../data/properties/schema";
import type { Tenant } from "../../data/tenants/schema";
import type { MaintenanceData } from "../../data/maintenance/schema";
import type { FinancialData } from "../../data/financials/schema";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const [ticketOpen, setTicketOpen] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [maintenance, setMaintenance] = useState<MaintenanceData[]>([]);
  const [financials, setFinancials] = useState<FinancialData[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      setProperties(await getProperties());
      setTenants(await getTenants());
      setMaintenance(await getMaintenanceData());
      setFinancials(await getFinancialData());
    })();
  }, []);

  // Stats
  const occupiedCount = properties.filter((p) => p.status === "occupied").length;
  const vacantCount = properties.filter((p) => p.status === "vacant").length;
  const maintenanceCount = properties.filter((p) => p.status === "maintenance").length;
  const occupancyPercent = properties.length ? Math.round((occupiedCount / properties.length) * 100) : 0;
  const openMaintenanceCount = maintenance.filter((m) => m.status === "open").length;
  const rentCollected = financials.filter((f) => f.type === "rent").reduce((sum, f) => sum + f.amount, 0);

  // Example chart data (replace with real analytics if available)
  const rentTrend = [
    { month: "Jan", rent: 2000 },
    { month: "Feb", rent: 2200 },
    { month: "Mar", rent: 2100 },
    { month: "Apr", rent: 2500 },
    { month: "May", rent: 2300 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex flex-col  mb-2 gap-4 md:flex-row md:items-center md:justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-gray-800">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Property Management Dashboard</h1>
          <p className="text-gray-400 text-sm sm:text-base">Real-time overview of your properties, tenants, and finances.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
          <Button variant="primary" onClick={() => setTicketOpen(true)} className="w-full sm:w-auto">Create Ticket</Button>
          <Notifications />
          <UserProfile />
        </div>
      </header>
      <TabNavigation className="overflow-x-auto px-2 sm:px-6 md:px-8">
        <TabNavigationLink asChild active={pathname === "/dashboard"}>
          <Link href="/dashboard">Overview</Link>
        </TabNavigationLink>
        <TabNavigationLink asChild active={pathname === "/dashboard/properties"}>
          <Link href="/dashboard/properties">Properties</Link>
        </TabNavigationLink>
        <TabNavigationLink asChild active={pathname === "/dashboard/tenants"}>
          <Link href="/dashboard/tenants">Tenants</Link>
        </TabNavigationLink>
        <TabNavigationLink asChild active={pathname === "/dashboard/maintenance"}>
          <Link href="/dashboard/maintenance">Maintenance</Link>
        </TabNavigationLink>
        <TabNavigationLink asChild active={pathname === "/dashboard/financials"}>
          <Link href="/dashboard/financials">Financials</Link>
        </TabNavigationLink>
      </TabNavigation>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Total Properties</h3>
            <div className="text-2xl sm:text-3xl font-bold">{properties.length}</div>
          </Card>
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Occupancy Rate</h3>
            <div className="flex items-center gap-2 sm:gap-4">
              <ProgressCircle value={occupancyPercent} radius={20} strokeWidth={4} variant="success" />
              <span className="text-xl sm:text-2xl font-bold">{occupancyPercent}%</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              <Badge variant="success">Occupied: {occupiedCount}</Badge>
              <Badge variant="default">Vacant: {vacantCount}</Badge>
              <Badge variant="warning">Maintenance: {maintenanceCount}</Badge>
            </div>
          </Card>
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Open Maintenance</h3>
            <div className="text-2xl sm:text-3xl font-bold">{openMaintenanceCount}</div>
          </Card>
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Total Rent Collected</h3>
            <div className="text-2xl sm:text-3xl font-bold">${rentCollected}</div>
          </Card>
        </div>
        {/* Trends/Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Rent Collection Trend</h3>
            <LineChart data={rentTrend} index="month" categories={["rent"]} colors={["blue"]} showLegend showTooltip />
          </Card>
          <Card>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Occupancy Trend</h3>
            {/* You can replace this with a real occupancy trend chart if available */}
            <LineChart data={rentTrend} index="month" categories={["rent"]} colors={["emerald"]} showLegend showTooltip />
          </Card>
        </div>
        {/* Recent Activity Table */}
        <Card>
          <h3 className="text-base sm:text-lg font-semibold mb-4">Recent Maintenance Requests</h3>
          <DataTable columns={columnsMaintenance} data={maintenance.slice(0, 10)} />
        </Card>
      </main>
      <TicketDrawer open={ticketOpen} onOpenChange={setTicketOpen} />
    </div>
  );
}