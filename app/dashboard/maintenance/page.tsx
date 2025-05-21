"use client";
import { useEffect, useState, useMemo } from "react";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { getMaintenanceData } from "@/data/maintenance/maintenance";
import { columnsMaintenance } from "@/app/components/ui/data-table/columnsMaintenance";
import type { MaintenanceData } from "@/data/maintenance/schema";
import { Card } from "@/app/components/Card";
import { ProgressCircle } from "@/app/components/ProgressCircle";
import { Badge } from "@/app/components/Badge";
import { valueFormatter } from "@/lib/formatters";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/app/components/Table";
import { Divider } from "@/app/components/Divider";
import { cx } from "@/lib/utils";

export default function MaintenancePage() {
  const [requests, setRequests] = useState<MaintenanceData[]>([]);
  useEffect(() => { getMaintenanceData().then(setRequests); }, []);

  // Analytics
  const total = requests.length;
  const open = requests.filter(r => r.status === "open").length;
  const inProgress = requests.filter(r => r.status === "in_progress").length;
  const closed = requests.filter(r => r.status === "closed").length;
  // Demo: average resolution time in days
  const avgResolution = 2.5;
  // Completion rate: closed/total
  const completionRate = total ? (closed / total) * 100 : 0;

  // --- Cohort grid logic ---
  // Group requests by week (YYYY-WW)
  const cohorts = useMemo(() => {
    const byWeek: Record<string, MaintenanceData[]> = {};
    requests.forEach((req) => {
      const date = new Date(req.createdAt);
      const year = date.getFullYear();
      const week = Math.ceil((((date.getTime() - new Date(year, 0, 1).getTime()) / 86400000) + new Date(year, 0, 1).getDay() + 1) / 7);
      const key = `${year}-W${week.toString().padStart(2, "0")}`;
      if (!byWeek[key]) byWeek[key] = [];
      byWeek[key].push(req);
    });
    return byWeek;
  }, [requests]);

  // For each cohort, calculate closed %
  const cohortRows = Object.entries(cohorts).map(([week, reqs]) => {
    const closed = reqs.filter(r => r.status === "closed").length;
    const percentClosed = reqs.length ? (closed / reqs.length) * 100 : 0;
    return { week, total: reqs.length, closed, percentClosed };
  });

  // Top issues (most common descriptions)
  const topIssues = useMemo(() => {
    const counts: Record<string, number> = {};
    requests.forEach(r => {
      counts[r.description] = (counts[r.description] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([desc, count]) => ({ desc, count }));
  }, [requests]);

  // --- End cohort logic ---

  // --- Cohort grid logic ---
  // Group requests by week (YYYY-WW)
  const colorClasses = [
    "bg-blue-50 dark:bg-blue-950",
    "bg-blue-100 dark:bg-blue-900",
    "bg-blue-200 dark:bg-blue-800",
    "bg-blue-300 dark:bg-blue-700",
    "bg-blue-400 dark:bg-blue-600",
    "bg-blue-500 dark:bg-blue-500",
    "bg-blue-600 dark:bg-blue-400",
  ];
  const getBackgroundColor = (value: number) => {
    const index = Math.min(
      Math.floor((value / 100) * colorClasses.length),
      colorClasses.length - 1
    );
    return colorClasses[index];
  };
  const getTextColor = (value: number) =>
    value > 60 ? "text-white dark:text-white" : "text-gray-900 dark:text-gray-50";

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Maintenance Analytics</h1>
        <p className="text-gray-400">Track maintenance requests, resolution rates, and operational efficiency across your properties.</p>
      </div>
      {/* Analytics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Total Requests</div>
              <div className="text-2xl font-bold">{total}</div>
            </div>
            <Badge variant="default">All</Badge>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-emerald-500 text-xs font-semibold">+5%</span>
            <span className="text-xs text-gray-400">vs last week</span>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Open</div>
              <div className="text-2xl font-bold">{open}</div>
            </div>
            <Badge variant="warning">Open</Badge>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-red-500 text-xs font-semibold">-2%</span>
            <span className="text-xs text-gray-400">vs last week</span>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">In Progress</div>
              <div className="text-2xl font-bold">{inProgress}</div>
            </div>
            <Badge variant="default">In Progress</Badge>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-yellow-500 text-xs font-semibold">0%</span>
            <span className="text-xs text-gray-400">vs last week</span>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Closed</div>
              <div className="text-2xl font-bold">{closed}</div>
            </div>
            <Badge variant="success">Closed</Badge>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-emerald-500 text-xs font-semibold">+3%</span>
            <span className="text-xs text-gray-400">vs last week</span>
          </div>
        </Card>
      </div>
      {/* Analytics row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400 mb-1">Avg. Resolution Time</div>
          <div className="text-2xl font-bold">{avgResolution} days</div>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400 mb-1">Completion Rate</div>
          <ProgressCircle value={completionRate} max={100} radius={48} strokeWidth={7} variant="success">
            <div className="flex flex-col items-center">
              <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">{completionRate.toFixed(1)}%</span>
              <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">Closed</span>
            </div>
          </ProgressCircle>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-400 mb-1">Resolution Rate</div>
          <ProgressCircle value={closed} max={total || 1} radius={48} strokeWidth={7} variant="success">
            <div className="flex flex-col items-center">
              <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">{total ? ((closed / total) * 100).toFixed(1) : 0}%</span>
              <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">Resolved</span>
            </div>
          </ProgressCircle>
        </Card>
      </div>
      {/* Cohort grid and Top Issues */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <p className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Weekly Maintenance Cohorts</p>
          <Table className="border-none">
            <TableHead>
              <TableRow>
                <TableHeaderCell className="min-w-40 bg-white dark:bg-gray-950">Week</TableHeaderCell>
                <TableHeaderCell className="bg-white dark:bg-gray-950">Requests</TableHeaderCell>
                <TableHeaderCell className="bg-white dark:bg-gray-950">Closed %</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cohortRows.map((row) => (
                <TableRow key={row.week}>
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">{row.week}</TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell>
                    <div
                      className={cx(
                        "flex flex-col items-center justify-center rounded-lg px-3.5 py-3 font-semibold shadow-sm transition",
                        getBackgroundColor(row.percentClosed),
                        getTextColor(row.percentClosed)
                      )}
                    >
                      <span className="block text-lg font-bold">{row.percentClosed.toFixed(1)}%</span>
                      <span className="block text-xs font-medium">{row.closed} closed</span>
                      <span className="block text-xs">{row.total} total</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        {/* Top Issues with bar */}
        <Card>
          <p className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Top Issues</p>
          <ol className="mt-2 divide-y divide-gray-200 dark:divide-gray-800">
            {topIssues.map((issue, idx) => {
              const maxCount = topIssues[0]?.count || 1;
              return (
                <li key={issue.desc} className="flex flex-col gap-1 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{idx + 1}.</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-50">{issue.desc}</span>
                    </div>
                    <div className="text-sm tabular-nums text-gray-600 dark:text-gray-400">{issue.count}</div>
                  </div>
                  <div className="mt-1 h-2 w-full rounded bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full rounded bg-blue-500"
                      style={{ width: `${(issue.count / maxCount) * 100}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </Card>
      </div>
      <Divider className="my-8" />
      {/* DataTable */}
      <Card>
        <h2 className="text-lg font-semibold mb-4">Maintenance Requests</h2>
        <DataTable columns={columnsMaintenance} data={requests} />
      </Card>
    </div>
  );
} 