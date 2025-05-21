"use client";
import { useEffect, useState } from "react";
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

export default function TenantDashboardPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState<MaintenanceData[]>([]);
  const [financials, setFinancials] = useState<FinancialData[]>([]);
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  const [showPayDialog, setShowPayDialog] = useState(false);
  const [requestDesc, setRequestDesc] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    getTenants().then(setTenants);
    getMaintenanceData().then(setMaintenanceRequests);
    getFinancialData().then(setFinancials);
  }, []);

  // Placeholder: get current tenant ID (replace with real session/user context)
  const currentTenantId = "1";
  const tenant = tenants.find(t => t.id === currentTenantId);

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

  // Maintenance requests for this tenant
  const myRequests = tenant ? maintenanceRequests.filter((r) => r.tenantId === tenant.id) : [];

  // Rent due for this tenant (latest rent for their property)
  const myRents = tenant ? financials.filter(
    (f) => f.propertyId === tenant.propertyId && f.type === "rent"
  ) : [];
  const latestRent = myRents.length > 0 ? myRents[myRents.length - 1] : null;

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

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, {tenant.name}</h1>
        <p className="text-gray-400">Your lease and contact information.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="text-sm text-gray-400 mb-1">Lease Period</div>
          <div className="text-2xl font-bold">
            {tenant.leaseStart} – {tenant.leaseEnd}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-gray-400 mb-1">Status</div>
          <Badge variant={tenant.status === "active" ? "success" : "default"}>
            {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
          </Badge>
        </Card>
        <Card>
          <div className="text-sm text-gray-400 mb-1">Contact</div>
          <div className="text-2xl font-bold">{tenant.email}</div>
          <div className="text-lg">{tenant.phone}</div>
        </Card>
      </div>
      <Card className="flex flex-col items-center justify-center mb-8">
        <div className="text-sm text-gray-400 mb-1">Lease Progress</div>
        <ProgressCircle value={leaseProgress} max={100} radius={48} strokeWidth={7} variant="success">
          <div className="flex flex-col items-center">
            <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
              {leaseProgress.toFixed(1)}%
            </span>
            <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
              Complete
            </span>
          </div>
        </ProgressCircle>
      </Card>
      {/* Maintenance Requests Section */}
      <Card className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Maintenance Requests</h2>
          <Dialog open={showRequestDialog} onOpenChange={setShowRequestDialog}>
            <DialogTrigger asChild>
              <Button variant="primary">New Request</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit Maintenance Request</DialogTitle>
                <DialogDescription>Describe your issue and our team will respond promptly.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="desc">Description</Label>
                  <Textarea
                    id="desc"
                    value={requestDesc}
                    onChange={e => setRequestDesc(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" variant="primary">Submit</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-2">
          {myRequests.length === 0 ? (
            <div className="text-gray-400">No maintenance requests yet.</div>
          ) : (
            myRequests.map((req) => (
              <div key={req.id} className="flex items-center justify-between rounded bg-gray-900 px-4 py-2">
                <div>
                  <div className="font-medium">{req.description}</div>
                  <div className="text-xs text-gray-400">{new Date(req.createdAt).toLocaleDateString()}</div>
                </div>
                <Badge variant={req.status === "open" ? "warning" : req.status === "in_progress" ? "default" : "success"}>
                  {req.status.replace("_", " ").toUpperCase()}
                </Badge>
              </div>
            ))
          )}
        </div>
      </Card>
      {/* Payment Section */}
      <Card
        className={cx(
          "mb-8 relative overflow-hidden transition-all duration-500",
          showPayDialog ? "ring-4 ring-blue-400/60 scale-[1.02] shadow-2xl" : ""
        )}
      >
        {/* Gradient blobs background */}
        <div className="pointer-events-none absolute inset-0 -z-10 transition-all duration-500">
          <div
            className={cx(
              "absolute -top-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 blur-2xl transition-all duration-500",
              showPayDialog ? "opacity-60 scale-110" : "opacity-30"
            )}
          />
          <div
            className={cx(
              "absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 blur-2xl transition-all duration-500",
              showPayDialog ? "opacity-60 scale-110" : "opacity-30"
            )}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Rent Payment</h2>
          {latestRent && (
            <Dialog open={showPayDialog} onOpenChange={setShowPayDialog}>
              <DialogTrigger asChild>
                <Button variant="primary">Pay Rent</Button>
              </DialogTrigger>
              <DialogContent>
                {/* Gradient blobs background for dialog */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 opacity-40 blur-2xl" />
                  <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 opacity-40 blur-2xl" />
                  <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tl from-pink-400 via-blue-300 to-purple-400 opacity-30 blur-2xl" />
                  <div className="absolute top-8 right-1/3 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400 opacity-30 blur-2xl" />
                  <div className="absolute bottom-8 left-1/4 h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-400 opacity-20 blur-2xl" />
                </div>
                <DialogHeader>
                  <DialogTitle>Pay Rent</DialogTitle>
                  <DialogDescription>Enter your payment details to pay your rent.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handlePayRent} className="space-y-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" value={latestRent.amount} disabled className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="card">Card Number</Label>
                    <Input id="card" placeholder="1234 5678 9012 3456" required className="mt-1" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor="exp">Expiry</Label>
                      <Input id="exp" placeholder="MM/YY" required className="mt-1" />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" required className="mt-1" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" variant="primary" isLoading={isPaying}>Pay</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
        {latestRent ? (
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">${latestRent.amount}</div>
            <div className="text-gray-400">Due: {new Date(latestRent.date).toLocaleDateString()}</div>
            <div className="text-gray-400">{latestRent.description}</div>
          </div>
        ) : (
          <div className="text-gray-400">No rent due at this time.</div>
        )}
      </Card>
    </div>
  );
}
