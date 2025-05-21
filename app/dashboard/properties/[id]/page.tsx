import { getProperties } from "@/data/properties/properties";
import { notFound } from "next/navigation";

interface PropertyDetailPageProps {
  params: { id: string };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const properties = await getProperties();
  const property = properties.find((p) => p.id === params.id);
  if (!property) return notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{property.name}</h1>
      <div className="space-y-2">
        <div><strong>Address:</strong> {property.address}</div>
        <div><strong>Owner:</strong> {property.owner}</div>
        <div><strong>Units:</strong> {property.units}</div>
        <div><strong>Status:</strong> {property.status}</div>
      </div>
    </div>
  );
} 