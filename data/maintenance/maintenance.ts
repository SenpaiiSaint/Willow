import { MaintenanceData } from "./schema";

const mockRequests: MaintenanceData[] = [
  {
    id: "1",
    propertyId: "1",
    tenantId: "1",
    description: "Leaky faucet in kitchen",
    status: "open",
    createdAt: "2023-06-01T10:00:00Z",
    updatedAt: "2023-06-01T10:00:00Z",
  },
  {
    id: "2",
    propertyId: "2",
    tenantId: "2",
    description: "Broken window in living room",
    status: "in_progress",
    createdAt: "2023-06-05T14:30:00Z",
    updatedAt: "2023-06-06T09:00:00Z",
  },
  {
    id: "3",
    propertyId: "3",
    tenantId: "3",
    description: "Heating not working",
    status: "closed",
    createdAt: "2023-05-20T08:00:00Z",
    updatedAt: "2023-05-22T16:00:00Z",
  },
];

export async function getMaintenanceData(): Promise<MaintenanceData[]> {
  return mockRequests;
} 