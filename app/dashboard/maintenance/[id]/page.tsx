import { getMaintenanceData } from "@/data/maintenance/maintenance";
import { notFound } from "next/navigation";

interface MaintenanceDetailPageProps {
  params: { id: string };
}

export default async function MaintenanceDetailPage({ params }: MaintenanceDetailPageProps) {
  const requests = await getMaintenanceData();
  const request = requests.find((r) => r.id === params.id);
  if (!request) return notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Maintenance Request</h1>
      <div className="space-y-2">
        <div><strong>Description:</strong> {request.description}</div>
        <div><strong>Status:</strong> {request.status}</div>
        <div><strong>Created At:</strong> {request.createdAt}</div>
        <div><strong>Updated At:</strong> {request.updatedAt}</div>
      </div>
    </div>
  );
} 