import { Tenant } from "./schema";

const mockTenants: Tenant[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-1234",
    propertyId: "1",
    leaseStart: "2023-01-01",
    leaseEnd: "2023-12-31",
    status: "active",
  },
  {
    id: "2",
    name: "Bob Lee",
    email: "bob@example.com",
    phone: "555-5678",
    propertyId: "2",
    leaseStart: "2023-03-01",
    leaseEnd: "2024-02-28",
    status: "active",
  },
  {
    id: "3",
    name: "Carol King",
    email: "carol@example.com",
    phone: "555-8765",
    propertyId: "3",
    leaseStart: "2022-06-01",
    leaseEnd: "2023-05-31",
    status: "inactive",
  },
];

export async function getTenants(): Promise<Tenant[]> {
  return mockTenants;
} 