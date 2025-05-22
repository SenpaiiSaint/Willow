"use client";
import { useEffect, useState } from "react";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { getFinancialData } from "@/data/financials/financial";
import { columnsFinancials } from "@/app/components/ui/data-table/columnsFinancials";
import type { FinancialData } from "@/data/financials/schema";
import { Card } from "@/app/components/Card";
import { Input } from "@/app/components/Input";
import { Checkbox } from "@/app/components/Checkbox";
import { Slider } from "@/app/components/Slider";
import { Badge } from "@/app/components/Badge";
import { LineChart } from "@/app/components/LineChart";
import { Button } from "@/app/components/Button";
import { ProgressCircle } from "@/app/components/ProgressCircle";
import { Divider } from "@/app/components/Divider";
import { valueFormatter } from "@/lib/formatters";
import { TabNavigation, TabNavigationLink } from "@/app/components/TabNavigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/Tabs";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRoot, TableRow } from "@/app/components/Table";
import { CategoryBar } from "@/app/components/CategoryBar";
import { cx } from "@/lib/utils";

const departments = [
  "Rent",
  "Utilities",
  "Maintenance",
  "Insurance",
  "Other"
];

export default function FinancialsPage() {
  const pathname = usePathname();
  const [records, setRecords] = useState<FinancialData[]>([]);
  const [target, setTarget] = useState(80);
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFinancialData().then(setRecords);
  }, []);

  // Filter by department/category and search
  const filteredRecords = records.filter((rec) => {
    const matchesDept = selectedDepts.length === 0 || selectedDepts.includes(rec.type.charAt(0).toUpperCase() + rec.type.slice(1));
    const matchesSearch =
      rec.description.toLowerCase().includes(search.toLowerCase()) ||
      rec.type.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Example stats (customize as needed)
  const totalRent = records.filter(r => r.type === "rent").reduce((sum, r) => sum + r.amount, 0);
  const totalExpenses = records.filter(r => r.type === "expense").reduce((sum, r) => sum + r.amount, 0);
  const outstanding = 0; // You can calculate this if you have the data

  // Example chart data
  const chartData = [
    { month: "Jan", rent: 2000, expense: 500 },
    { month: "Feb", rent: 2200, expense: 600 },
    { month: "Mar", rent: 2100, expense: 700 },
    { month: "Apr", rent: 2500, expense: 800 },
    { month: "May", rent: 2300, expense: 900 },
  ];

  // Capital analytics demo data
  const capitalData: Array<{
    date: string;
    description: string;
    account: string;
    amount: string;
    changeType: "positive" | "negative";
  }> = [
    {
      date: "Dec 23",
      description: "Venture debt loan repayment",
      account: "Calantis business account",
      amount: "-$1,200",
      changeType: "negative",
    },
    {
      date: "Nov 23",
      description: "Venture debt loan repayment",
      account: "Calantis business account",
      amount: "-$2,200",
      changeType: "negative",
    },
    {
      date: "Oct 23",
      description: "Venture debt loan repayment",
      account: "Calantis business account",
      amount: "-$1,200",
      changeType: "negative",
    },
    {
      date: "Sep 23",
      description: "Venture debt loan funding",
      account: "Calantis business account",
      amount: "+$5,000,000",
      changeType: "positive",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Financials</h1>
        <p className="text-gray-400">Analyze rent collection, expenses, and financial impact across your properties.</p>
      </div>
      {/* Capital/Venture Debt Analytics Section */}
      <Card className="mb-8 p-8 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-50">Capital</h1>
        <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-500">Analyze and manage your venture debt and balance.</p>
        <Tabs defaultValue="tab1" className="mt-6">
          <TabsList>
            <TabsTrigger value="tab1">Venture Debt</TabsTrigger>
            <TabsTrigger value="tab2">Capital Guide</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="md:col-span-2 bg-white dark:bg-gray-900">
                <h1 className="text-sm text-gray-500 dark:text-gray-500">Outstanding balance</h1>
                <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-50">$5,450,000</p>
                <CategoryBar
                  values={[4, 1.2, 0.25]}
                  colors={["blue", "cyan", "fuchsia"]}
                  className="mt-6"
                  showLabels={false}
                />
                <ul role="list" className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="size-3 shrink-0 rounded-sm bg-blue-500 dark:bg-blue-500" aria-hidden={true} />
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      <span className="font-medium text-gray-700 dark:text-gray-300">$4M</span> outstanding
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="size-3 shrink-0 rounded-sm bg-cyan-500 dark:bg-cyan-500" aria-hidden={true} />
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      <span className="font-medium text-gray-700 dark:text-gray-300">$1.2M</span> available today
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="size-3 shrink-0 rounded-sm bg-fuchsia-500 dark:bg-fuchsia-500" aria-hidden={true} />
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      <span className="font-medium text-gray-700 dark:text-gray-300">$0.25M</span> unavailable
                    </span>
                  </li>
                </ul>
                <Divider />
                <p className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-50">Interest only ends Jan 4, 2024</p>
                <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <p className="flex flex-wrap justify-between gap-4 text-sm/6 text-gray-600 dark:text-gray-400">
                    Next payment of $3,200 due Jan 1, 2024.
                    <a href="#" className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500">
                      Learn more
                      <RiExternalLinkLine className="size-4" aria-hidden={true} />
                    </a>
                  </p>
                </div>
              </Card>
              <div className="md:col-span-1 md:p-6">
                <h4 className="font-medium text-gray-900 dark:text-gray-50">Questions?</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">Contact your financial advisor</p>
                <div className="mt-6 flex items-center space-x-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-blue-500 dark:bg-gray-900 dark:text-blue-500" aria-hidden={true}>EL</span>
    <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50">Emily Liftburg</p>
                    <a href="mailto:#" className="mt-0.5 block text-sm text-blue-500 dark:text-blue-500">emily.liftburg@company.com</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-14 font-medium text-gray-900 dark:text-gray-50">Transactions</p>
            <TableRoot className="mt-8">
              <Table className="border-transparent">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>Date</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                    <TableHeaderCell>Account</TableHeaderCell>
                    <TableHeaderCell className="text-right">Amount</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {capitalData.map((item: typeof capitalData[number]) => (
                    <TableRow key={item.date}>
                      <TableCell className="font-medium text-gray-900 dark:text-gray-50">{item.date}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.account}</TableCell>
                      <TableCell className="text-right">
                        <span className={cx(
                          item.changeType === "positive"
                            ? "text-emerald-700 dark:text-emerald-500"
                            : "text-gray-900 dark:text-gray-50",
                          "font-medium",
                        )}>
                          {item.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableRoot>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="mt-10 text-gray-700 dark:text-gray-300">Capital guide content coming soon.</div>
          </TabsContent>
        </Tabs>
      </Card>
      {/* End Capital/Venture Debt Analytics Section */}
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
      <Card className="mt-4 mb-8 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium">Rent Collection Target (%)</label>
            <Slider value={[target]} onValueChange={([val]) => setTarget(val)} min={0} max={100} step={1} />
            <div className="text-sm text-gray-400 mt-1">Current: {target}%</div>
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium">Select categories to exclude</label>
            <div className="flex flex-wrap gap-4">
              {departments.map((dept) => (
                <label key={dept} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={selectedDepts.includes(dept)}
                    onCheckedChange={checked => {
                      setSelectedDepts(prev =>
                        checked ? [...prev, dept] : prev.filter(d => d !== dept)
                      );
                    }}
                  />
                  {dept}
                </label>
              ))}
            </div>
          </div>
        </div>
      </Card>
      {/* Workflow-style stat section */}
      <section className="relative mt-12 overflow-x-scroll p-4">
        <div className="relative grid min-w-[40rem] grid-cols-5">
          {/* 1. Total Rent Collected */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
              1. Total Rent Collected
            </h2>
            <div className="flex justify-center">
              <ProgressCircle
                radius={45}
                strokeWidth={6}
                value={totalRent}
                max={totalRent + totalExpenses + outstanding || 1}
                variant="success"
              >
                <div className="flex flex-col items-center">
                  <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                    {valueFormatter(totalRent)}
                  </span>
                  <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                    {((totalRent / (totalRent + totalExpenses + outstanding || 1)) * 100).toFixed(1)}%
                  </span>
                </div>
              </ProgressCircle>
            </div>
          </div>
          {/* Connector */}
          <div className="mt-24 min-w-32">
            <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700" />
            <div className="mx-auto h-48 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
            <div className="ml-auto w-1/2 border-t border-dashed border-gray-300 dark:border-gray-700" />
          </div>
          {/* 2. Total Expenses */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
              2. Total Expenses
            </h2>
            <div className="flex justify-center">
              <ProgressCircle
                radius={45}
                strokeWidth={6}
                value={totalExpenses}
                max={totalRent + totalExpenses + outstanding || 1}
                variant="error"
              >
                <div className="flex flex-col items-center">
                  <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                    {valueFormatter(totalExpenses)}
                  </span>
                  <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                    {((totalExpenses / (totalRent + totalExpenses + outstanding || 1)) * 100).toFixed(1)}%
                  </span>
                </div>
              </ProgressCircle>
            </div>
          </div>
          {/* Connector */}
          <div className="mt-24 min-w-32">
            <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700" />
            <div className="mx-auto h-48 w-px border-l border-dashed border-gray-300 dark:border-gray-700" />
            <div className="ml-auto w-1/2 border-t border-dashed border-gray-300 dark:border-gray-700" />
          </div>
          {/* 3. Outstanding Payments */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
              3. Outstanding Payments
            </h2>
            <div className="flex justify-center">
              <ProgressCircle
                radius={45}
                strokeWidth={6}
                value={outstanding}
                max={totalRent + totalExpenses + outstanding || 1}
                variant="neutral"
              >
                <div className="flex flex-col items-center">
                  <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                    {valueFormatter(outstanding)}
                  </span>
                  <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                    {((outstanding / (totalRent + totalExpenses + outstanding || 1)) * 100).toFixed(1)}%
                  </span>
                </div>
              </ProgressCircle>
            </div>
          </div>
        </div>
      </section>
      <Divider className="my-12" />
      {/* Additional ProgressCircle analytics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Rent Collection Rate */}
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">Rent Collection Rate</h3>
          <div className="flex justify-center">
            <ProgressCircle
              value={totalRent}
              max={totalRent + outstanding || 1}
              variant="success"
              radius={60}
              strokeWidth={8}
            >
              <div className="flex flex-col items-center">
                <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {((totalRent / (totalRent + outstanding || 1)) * 100).toFixed(1)}%
                </span>
                <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                  Collected
                </span>
              </div>
            </ProgressCircle>
          </div>
        </Card>
        {/* Expense Budget Utilization */}
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">Expense Budget Utilization</h3>
          <div className="flex justify-center">
            <ProgressCircle
              value={totalExpenses}
              max={5000}
              variant={totalExpenses > 5000 ? "error" : "warning"}
              radius={60}
              strokeWidth={8}
            >
              <div className="flex flex-col items-center">
                <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {((totalExpenses / 5000) * 100).toFixed(1)}%
                </span>
                <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                  Used
                </span>
              </div>
            </ProgressCircle>
          </div>
        </Card>
        {/* Outstanding Payment Progress */}
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">Outstanding Payment Progress</h3>
          <div className="flex justify-center">
            <ProgressCircle
              value={outstanding}
              max={totalRent + outstanding || 1}
              variant="neutral"
              radius={60}
              strokeWidth={8}
            >
              <div className="flex flex-col items-center">
                <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {((outstanding / (totalRent + outstanding || 1)) * 100).toFixed(1)}%
                </span>
                <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                  Outstanding
                </span>
              </div>
            </ProgressCircle>
          </div>
        </Card>
        {/* Maintenance Cost Progress (demo values) */}
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">Maintenance Cost Progress</h3>
          <div className="flex justify-center">
            <ProgressCircle
              value={1200}
              max={2000}
              variant={1200 > 2000 ? "error" : "warning"}
              radius={60}
              strokeWidth={8}
            >
              <div className="flex flex-col items-center">
                <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {(1200 / 2000 * 100).toFixed(1)}%
                </span>
                <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                  Used
                </span>
              </div>
            </ProgressCircle>
          </div>
        </Card>
        {/* Profit Margin */}
        <Card className="w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2">Profit Margin</h3>
          <div className="flex justify-center">
            <ProgressCircle
              value={totalRent - totalExpenses}
              max={totalRent || 1}
              variant="success"
              radius={60}
              strokeWidth={8}
            >
              <div className="flex flex-col items-center">
                <span className="mt-1 font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {(((totalRent - totalExpenses) / (totalRent || 1)) * 100).toFixed(1)}%
                </span>
                <span className="text-xs font-medium tabular-nums text-gray-500 dark:text-gray-500">
                  Margin
                </span>
              </div>
            </ProgressCircle>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Financial Trends</h3>
          <LineChart data={chartData} index="month" categories={["rent", "expense"]} colors={["emerald", "red"]} showLegend showTooltip />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2">Search Financial Records</h3>
          <Input
            className="w-full"
            placeholder="Search by description or type..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Card>
      </div>
      <Card>
        <h3 className="text-lg font-semibold mb-4">Financial Records</h3>
        <DataTable columns={columnsFinancials} data={filteredRecords} />
      </Card>
    </div>
  );
} 