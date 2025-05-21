import { getFinancialData } from "@/data/financials/financial";
import { notFound } from "next/navigation";

interface FinancialDetailPageProps {
  params: { id: string };
}

export default async function FinancialDetailPage({ params }: FinancialDetailPageProps) {
  const records = await getFinancialData();
  const record = records.find((r) => r.id === params.id);
  if (!record) return notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Financial Record</h1>
      <div className="space-y-2">
        <div><strong>Type:</strong> {record.type}</div>
        <div><strong>Amount:</strong> {record.amount}</div>
        <div><strong>Date:</strong> {record.date}</div>
        <div><strong>Description:</strong> {record.description}</div>
      </div>
    </div>
  );
} 