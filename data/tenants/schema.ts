export interface Tenant {
    id: string;
    name: string;
    email: string;
    phone: string;
    propertyId: string;
    leaseStart: string;
    leaseEnd: string;
    status: "active" | "inactive";
  } 