import React from "react";
import { Card } from "@/app/components/Card";
import { Divider } from "@/app/components/Divider";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "@/app/components/Table";
import { Badge } from "@/app/components/Badge";
import { CategoryBar } from "@/app/components/CategoryBar";

const demoSummary = [
  { label: "Deposit", value: 1000, color: "bg-blue-500" },
  { label: "Credits", value: 100, color: "bg-emerald-500" },
  { label: "On Hold", value: 200, color: "bg-fuchsia-500" },
  { label: "Outstanding Rent", value: 0, color: "bg-red-500" },
];

const demoActivity = [
  { date: "2024-05-01", type: "Rent Payment", description: "May rent paid", amount: -1200, status: "Completed" },
  { date: "2024-04-01", type: "Rent Payment", description: "April rent paid", amount: -1200, status: "Completed" },
  { date: "2024-03-28", type: "Credit", description: "Credit for maintenance inconvenience", amount: 100, status: "Completed" },
  { date: "2024-03-15", type: "Hold", description: "Hold for pet fee", amount: -200, status: "On Hold" },
  { date: "2024-02-01", type: "Deposit", description: "Security deposit received", amount: 1000, status: "Completed" },
  { date: "2024-01-31", type: "Refund", description: "Deposit refund processed", amount: -500, status: "Completed" },
];

export function AccountActivityCard() {
  // For the CategoryBar visual breakdown
  const barValues = [demoSummary[0].value, demoSummary[1].value, demoSummary[2].value];
  const barColors: Array<"blue" | "emerald" | "fuchsia"> = ["blue", "emerald", "fuchsia"];

  return (
    <Card className="mb-8 p-8 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">Account Activity</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Track your rent payments, deposits, credits, holds, and refunds in one place.
      </p>
      {/* Visual breakdown */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1">
          <CategoryBar
            values={barValues}
            colors={barColors}
            showLabels={false}
            className="mb-2"
          />
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-1">
              <span className="inline-block size-3 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-500">Deposit</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block size-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-gray-500">Credits</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-block size-3 rounded-full bg-fuchsia-500" />
              <span className="text-xs text-gray-500">On Hold</span>
            </div>
          </div>
        </div>
        {/* Help/Support section for desktop, below for mobile */}
        <div className="flex-1 flex flex-col items-start sm:items-end mt-4 sm:mt-0">
          <div className="rounded-lg bg-blue-50 dark:bg-gray-800 p-4 w-full sm:w-auto">
            <div className="font-medium text-blue-700 dark:text-blue-300 mb-1">Need Help?</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Reach out to our support team for any questions about your account activity, deposits, or credits.
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-blue-500 dark:bg-gray-900 dark:text-blue-500" aria-hidden={true}>LO</span>
              <div>
                <div className="text-xs font-medium text-gray-900 dark:text-gray-50">Leasing Office</div>
                <a href="mailto:support@rentplatform.com" className="block text-xs text-blue-500 dark:text-blue-400 hover:underline">support@rentplatform.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Summary grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {demoSummary.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className={`mb-1 inline-block size-3 rounded-full ${item.color}`} aria-hidden="true" />
            <span className="text-xs text-gray-500 dark:text-gray-400">{item.label}</span>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-50 tabular-nums">
              {item.value < 0 ? '-' : ''}${Math.abs(item.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <Divider className="my-8" />
      <h2 className="text-base font-semibold mb-2">Recent Activity</h2>
      <TableRoot>
        <Table className="border-transparent">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Type</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell className="text-right">Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoActivity.map((item) => (
              <TableRow key={item.date + item.description}>
                <TableCell className="tabular-nums">{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={
                    item.type === "Rent Payment"
                      ? "primary"
                      : item.type === "Deposit"
                      ? "info"
                      : item.type === "Credit"
                      ? "success"
                      : item.type === "Hold"
                      ? "warning"
                      : item.type === "Refund"
                      ? "neutral"
                      : "default"
                  }>
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {item.amount < 0 ? '-' : ''}${Math.abs(item.amount).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={item.status === "Completed" ? "success" : item.status === "On Hold" ? "warning" : "default"}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </Card>
  );
} 