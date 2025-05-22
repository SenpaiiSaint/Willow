import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  status?: "success" | "warning" | "error" | "info";
  children?: React.ReactNode;
}

const statusColors: Record<string, string> = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
};

export function StatCard({ title, value, icon, status = "info", children }: StatCardProps) {
  return (
    <div className="rounded-lg bg-white shadow p-4 flex flex-col gap-2 min-w-[160px]">
      <div className="flex items-center gap-2">
        {icon && (
          <span className={`inline-flex items-center justify-center rounded-full p-2 text-lg ${statusColors[status] || statusColors.info}`}>{icon}</span>
        )}
        <span className="text-sm font-medium text-gray-500">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {children && <div className="mt-1">{children}</div>}
    </div>
  );
} 