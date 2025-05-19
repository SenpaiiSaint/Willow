'use client';

import { Card, Title, Text, DonutChart, BarList, Grid, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';

const propertyTypes = [
  { name: 'Apartments', value: 12000 },
  { name: 'Villas', value: 8000 },
  { name: 'Studios', value: 4000 },
  { name: 'Commercial', value: 2000 },
];

const tenantStatus = [
  { name: 'Active', value: 320 },
  { name: 'Pending', value: 45 },
  { name: 'Evicted', value: 5 },
];

const recentActivity = [
  { date: '2024-06-01', user: 'Sarah Johnson', action: 'Added new property', status: 'Success' },
  { date: '2024-06-01', user: 'Mike Lee', action: 'Approved tenant', status: 'Success' },
  { date: '2024-05-31', user: 'Emily Chen', action: 'Payment failed', status: 'Error' },
  { date: '2024-05-30', user: 'Admin', action: 'Updated lease', status: 'Success' },
];

export default function AdminDashboard() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <Title className="text-3xl font-bold mb-2">Admin Dashboard</Title>
      <Text className="mb-8 text-gray-600">Overview and analytics for your property management platform</Text>
      <Grid numItems={3} className="gap-6 mb-8">
        <Card>
          <Title>Total Properties</Title>
          <Text className="text-2xl font-bold mt-2">10,000+</Text>
        </Card>
        <Card>
          <Title>Active Tenants</Title>
          <Text className="text-2xl font-bold mt-2">50,000+</Text>
        </Card>
        <Card>
          <Title>Monthly Revenue</Title>
          <Text className="text-2xl font-bold mt-2">$1,200,000</Text>
        </Card>
      </Grid>
      <Grid numItems={2} className="gap-6 mb-8">
        <Card>
          <Title>Property Types</Title>
          <DonutChart
            data={propertyTypes}
            category="value"
            index="name"
            colors={["blue", "cyan", "indigo", "violet"]}
            className="mt-4 h-56"
          />
        </Card>
        <Card>
          <Title>Tenant Status</Title>
          <BarList
            data={tenantStatus}
            valueFormatter={(v: number) => v.toString()}
            className="mt-4"
          />
        </Card>
      </Grid>
      <Card className="mt-8">
        <Title>Recent Activity</Title>
        <Table className="mt-4">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentActivity.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.action}</TableCell>
                <TableCell>
                  <span className={
                    item.status === 'Success' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'
                  }>
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}