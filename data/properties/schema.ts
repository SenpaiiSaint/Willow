export interface Property {
    id: string;
    name: string;
    address: string;
    owner: string;
    units: number;
    status: "occupied" | "vacant" | "maintenance";
  } 