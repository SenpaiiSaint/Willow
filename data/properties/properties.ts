import { Property } from "./schema";

const mockProperties: Property[] = [
  {
    id: "1",
    name: "Sunset Villas",
    address: "123 Main St",
    owner: "John Doe",
    units: 10,
    status: "occupied",
  },
  {
    id: "2",
    name: "Lakeside Apartments",
    address: "456 Lake Ave",
    owner: "Jane Smith",
    units: 20,
    status: "vacant",
  },
  {
    id: "3",
    name: "Downtown Lofts",
    address: "789 City Rd",
    owner: "Acme Corp",
    units: 15,
    status: "maintenance",
  },
];

export async function getProperties(): Promise<Property[]> {
  return mockProperties;
} 