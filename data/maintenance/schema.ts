export interface MaintenanceData {
    id: string;
    propertyId: string;
    tenantId: string; 
    description: string;
    status: "open" | "in_progress" | "closed";
    createdAt: string;
    updatedAt?: string;
}
