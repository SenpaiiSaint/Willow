import { getTenants } from "@/data/tenants/tenants";
import { notFound } from "next/navigation";

interface TenantDetailPageProps {
  params: { id: string };
}

export default async function TenantDetailPage({ params }: TenantDetailPageProps) {
  const tenants = await getTenants();
  const tenant = tenants.find((t) => t.id === params.id);
  if (!tenant) return notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tenant.name}</h1>
      <div className="space-y-2">
        <div><strong>Email:</strong> {tenant.email}</div>
        <div><strong>Phone:</strong> {tenant.phone}</div>
        <div><strong>Lease Start:</strong> {tenant.leaseStart}</div>
        <div><strong>Lease End:</strong> {tenant.leaseEnd}</div>
        <div><strong>Status:</strong> {tenant.status}</div>
      </div>
    </div>
  );
} 