"use client";
import { useEffect, useState } from "react";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { getProperties } from "@/data/properties/properties";
import { columns } from "@/app/components/ui/data-table/columns";
import type { Property } from "@/data/properties/schema";
import { Card } from "@/app/components/Card";
import { Badge } from "@/app/components/Badge";
import { ProgressCircle } from "@/app/components/ProgressCircle";
import { valueFormatter } from "@/lib/formatters";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => { getProperties().then(setProperties); }, []);

  // Analytics
  const total = properties.length;
  const totalUnits = properties.reduce((sum, p) => sum + p.units, 0);
  const occupied = properties.filter(p => p.status === "occupied").length;
  const vacant = properties.filter(p => p.status === "vacant").length;
  const maintenance = properties.filter(p => p.status === "maintenance").length;
  const occupancyRate = total ? (occupied / total) * 100 : 0;
  const vacancyRate = total ? (vacant / total) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Properties Overview</h1>
        <p className="text-gray-400">Monitor your property portfolio, occupancy, and operational status at a glance.</p>
      </div>
      {/* Analytics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total Properties</div>
              <div className="text-2xl font-bold">{valueFormatter(total)}</div>
            </div>
            <Badge variant="default">All</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total Units</div>
              <div className="text-2xl font-bold">{valueFormatter(totalUnits)}</div>
            </div>
            <Badge variant="default">Units</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Occupied</div>
              <div className="text-2xl font-bold">{valueFormatter(occupied)}</div>
            </div>
            <Badge variant="success">Occupied</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Vacant</div>
              <div className="text-2xl font-bold">{valueFormatter(vacant)}</div>
            </div>
            <Badge variant="default">Vacant</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Maintenance</div>
              <div className="text-2xl font-bold">{valueFormatter(maintenance)}</div>
            </div>
            <Badge variant="warning">Maintenance</Badge>
          </div>
        </Card>
      </div>
      {/* Occupancy/vacancy progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <Card className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400 mb-1">Occupancy Rate</div>
          <ProgressCircle value={occupancyRate} max={100} radius={48} strokeWidth={7} variant="success">
            <div className="flex flex-col items-center">
              <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">{occupancyRate.toFixed(1)}%</span>
              <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">Occupied</span>
            </div>
          </ProgressCircle>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400 mb-1">Vacancy Rate</div>
          <ProgressCircle value={vacancyRate} max={100} radius={48} strokeWidth={7} variant="warning">
            <div className="flex flex-col items-center">
              <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">{vacancyRate.toFixed(1)}%</span>
              <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">Vacant</span>
            </div>
          </ProgressCircle>
        </Card>
      </div>
      {/* DataTable */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">All Properties</h2>
        <DataTable columns={columns} data={properties} />
      </Card>
    </div>
  );
} 