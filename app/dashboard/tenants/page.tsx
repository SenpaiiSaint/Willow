"use client";
import { useEffect, useState } from "react";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { getTenants } from "@/data/tenants/tenants";
import { columnsTenants } from "@/app/components/ui/data-table/columnsTenants";
import type { Tenant } from "@/data/tenants/schema";
import { Input } from "@/app/components/Input";
import { Checkbox } from "@/app/components/Checkbox";
import { Button } from "@/app/components/Button";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/Dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TabNavigation, TabNavigationLink } from "@/app/components/TabNavigation";

export default function TenantsPage() {
  const pathname = usePathname();
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [search, setSearch] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", status: "active" as "active" | "inactive" });

  useEffect(() => {
    getTenants().then(setTenants);
  }, []);

  // Filter tenants by search and active status
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(search.toLowerCase()) ||
      tenant.email.toLowerCase().includes(search.toLowerCase()) ||
      tenant.phone.toLowerCase().includes(search.toLowerCase());
    const matchesActive = !activeOnly || tenant.status === "active";
    return matchesSearch && matchesActive;
  });

  function handleAddTenant(e: React.FormEvent) {
    e.preventDefault();
    setTenants(prev => [
      ...prev,
      {
        id: (prev.length + 1).toString(),
        ...form,
        propertyId: "", // You can extend the form to select property if needed
        leaseStart: "",
        leaseEnd: "",
      }
    ]);
    setForm({ name: "", email: "", phone: "", status: "active" });
    setDialogOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Tenants</h1>
          <p className="text-gray-400">Monitor tenant status and lease information.</p>
        </div>
        <Button variant="primary" onClick={() => setDialogOpen(true)}>Add Tenant</Button>
      </div>
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
      <div className="flex items-center gap-4  mt-4 mb-4">
        <Input
          className="w-80"
          placeholder="Search all columns..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={activeOnly}
            onCheckedChange={checked => setActiveOnly(!!checked)}
          />
          Active tenants only
        </label>
      </div>
      <div className="bg-gray-900 rounded-lg shadow p-4">
        <DataTable columns={columnsTenants} data={filteredTenants} />
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogTitle>Add Tenant</DialogTitle>
          <form onSubmit={handleAddTenant} className="space-y-4 mt-4">
            <div>
              <label className="block mb-1">Name</label>
              <Input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <Input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <Input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={form.status === "active"}
                onCheckedChange={checked => setForm(f => ({ ...f, status: checked ? "active" : "inactive" }))}
              />
              <span>Active</span>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="secondary" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button type="submit" variant="primary">Add</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 