import type { MaintenanceData } from "./schema";

export const maintenanceData: MaintenanceData[] = [
  // USA
  { id: "1", propertyId: "1", tenantId: "1", description: "Leaky faucet in kitchen", status: "open", createdAt: "2023-11-01T09:00:00Z" },
  { id: "2", propertyId: "2", tenantId: "2", description: "Broken window in living room", status: "closed", createdAt: "2023-10-15T14:30:00Z", updatedAt: "2023-10-20T10:00:00Z" },
  { id: "3", propertyId: "3", tenantId: "3", description: "Heating not working", status: "in_progress", createdAt: "2023-11-05T08:00:00Z" },
  { id: "4", propertyId: "4", tenantId: "4", description: "Pest control needed", status: "open", createdAt: "2023-11-10T12:00:00Z" },
  { id: "5", propertyId: "5", tenantId: "5", description: "Garage door stuck", status: "closed", createdAt: "2023-09-20T16:00:00Z", updatedAt: "2023-09-22T09:00:00Z" },
  { id: "6", propertyId: "6", tenantId: "6", description: "AC not cooling", status: "in_progress", createdAt: "2023-11-12T10:00:00Z" },
  { id: "7", propertyId: "7", tenantId: "7", description: "Clogged shower drain", status: "open", createdAt: "2023-11-13T11:00:00Z" },
  { id: "8", propertyId: "8", tenantId: "8", description: "Broken balcony railing", status: "closed", createdAt: "2023-10-01T13:00:00Z", updatedAt: "2023-10-03T15:00:00Z" },
  { id: "9", propertyId: "9", tenantId: "9", description: "Water heater leaking", status: "in_progress", createdAt: "2023-11-14T09:30:00Z" },
  { id: "10", propertyId: "10", tenantId: "10", description: "Mold in bathroom", status: "open", createdAt: "2023-11-15T08:45:00Z" },
  // ...
  { id: "11", propertyId: "11", tenantId: "11", description: "Elevator not working", status: "closed", createdAt: "2023-09-10T10:00:00Z", updatedAt: "2023-09-12T14:00:00Z" },
  { id: "12", propertyId: "12", tenantId: "12", description: "Roof leak in bedroom", status: "in_progress", createdAt: "2023-11-16T07:30:00Z" },
  { id: "13", propertyId: "13", tenantId: "13", description: "Broken intercom", status: "open", createdAt: "2023-11-17T09:00:00Z" },
  { id: "14", propertyId: "14", tenantId: "14", description: "No hot water", status: "closed", createdAt: "2023-10-25T11:00:00Z", updatedAt: "2023-10-27T10:00:00Z" },
  { id: "15", propertyId: "15", tenantId: "15", description: "Garage flooding", status: "open", createdAt: "2023-11-18T12:00:00Z" },
  // Europe
  { id: "16", propertyId: "16", tenantId: "16", description: "Broken window in penthouse", status: "open", createdAt: "2023-11-19T10:00:00Z" },
  { id: "17", propertyId: "17", tenantId: "17", description: "Toilet not flushing", status: "in_progress", createdAt: "2023-11-20T09:00:00Z" },
  { id: "18", propertyId: "18", tenantId: "18", description: "Leaking roof", status: "closed", createdAt: "2023-10-10T08:00:00Z", updatedAt: "2023-10-12T10:00:00Z" },
  { id: "19", propertyId: "19", tenantId: "19", description: "Broken gate lock", status: "open", createdAt: "2023-11-21T11:00:00Z" },
  { id: "20", propertyId: "20", tenantId: "20", description: "Heating system failure", status: "in_progress", createdAt: "2023-11-22T12:00:00Z" },
  { id: "21", propertyId: "21", tenantId: "21", description: "Pool pump not working", status: "open", createdAt: "2023-11-23T13:00:00Z" },
  { id: "22", propertyId: "22", tenantId: "22", description: "Lobby lights flickering", status: "closed", createdAt: "2023-10-15T14:00:00Z", updatedAt: "2023-10-16T10:00:00Z" },
  { id: "23", propertyId: "23", tenantId: "23", description: "Termite infestation", status: "in_progress", createdAt: "2023-11-24T15:00:00Z" },
  { id: "24", propertyId: "24", tenantId: "24", description: "Garage door remote not working", status: "open", createdAt: "2023-11-25T16:00:00Z" },
  { id: "25", propertyId: "25", tenantId: "25", description: "Snowed-in driveway", status: "closed", createdAt: "2023-10-20T17:00:00Z", updatedAt: "2023-10-21T09:00:00Z" },
  // Asia
  { id: "26", propertyId: "26", tenantId: "26", description: "Broken elevator", status: "open", createdAt: "2023-11-26T10:00:00Z" },
  { id: "27", propertyId: "27", tenantId: "27", description: "AC leaking water", status: "in_progress", createdAt: "2023-11-27T11:00:00Z" },
  { id: "28", propertyId: "28", tenantId: "28", description: "Power outage in unit", status: "closed", createdAt: "2023-10-22T12:00:00Z", updatedAt: "2023-10-23T10:00:00Z" },
  { id: "29", propertyId: "29", tenantId: "29", description: "Broken mailbox lock", status: "open", createdAt: "2023-11-28T13:00:00Z" },
  { id: "30", propertyId: "30", tenantId: "30", description: "Clogged kitchen sink", status: "in_progress", createdAt: "2023-11-29T14:00:00Z" },
  { id: "31", propertyId: "31", tenantId: "31", description: "Broken garage door spring", status: "open", createdAt: "2023-11-30T15:00:00Z" },
  { id: "32", propertyId: "32", tenantId: "32", description: "Leaking shower head", status: "closed", createdAt: "2023-10-24T16:00:00Z", updatedAt: "2023-10-25T10:00:00Z" },
  { id: "33", propertyId: "33", tenantId: "33", description: "No hot water in bathroom", status: "in_progress", createdAt: "2023-12-01T17:00:00Z" },
  { id: "34", propertyId: "34", tenantId: "34", description: "Broken window pane", status: "open", createdAt: "2023-12-02T18:00:00Z" },
  { id: "35", propertyId: "35", tenantId: "35", description: "Elevator stuck between floors", status: "closed", createdAt: "2023-10-26T19:00:00Z", updatedAt: "2023-10-27T10:00:00Z" },
  // Africa, Americas, Oceania, etc.
  { id: "36", propertyId: "36", tenantId: "36", description: "Broken intercom system", status: "open", createdAt: "2023-12-03T09:00:00Z" },
  { id: "37", propertyId: "37", tenantId: "37", description: "Pest infestation in basement", status: "in_progress", createdAt: "2023-12-04T10:00:00Z" },
  { id: "38", propertyId: "38", tenantId: "38", description: "Water leak in ceiling", status: "closed", createdAt: "2023-10-28T11:00:00Z", updatedAt: "2023-10-29T10:00:00Z" },
  { id: "39", propertyId: "39", tenantId: "39", description: "Broken security gate", status: "open", createdAt: "2023-12-05T12:00:00Z" },
  { id: "40", propertyId: "40", tenantId: "40", description: "No heating in winter", status: "in_progress", createdAt: "2023-12-06T13:00:00Z" },
  { id: "41", propertyId: "41", tenantId: "41", description: "Garage door remote not working", status: "open", createdAt: "2023-12-07T14:00:00Z" },
  { id: "42", propertyId: "42", tenantId: "42", description: "Broken window in living room", status: "closed", createdAt: "2023-10-30T15:00:00Z", updatedAt: "2023-10-31T10:00:00Z" },
  { id: "43", propertyId: "43", tenantId: "43", description: "Leaking roof in attic", status: "in_progress", createdAt: "2023-12-08T16:00:00Z" },
  { id: "44", propertyId: "44", tenantId: "44", description: "No hot water in kitchen", status: "open", createdAt: "2023-12-09T17:00:00Z" },
  { id: "45", propertyId: "45", tenantId: "45", description: "Broken elevator button", status: "closed", createdAt: "2023-11-01T18:00:00Z", updatedAt: "2023-11-02T10:00:00Z" },
  { id: "46", propertyId: "46", tenantId: "46", description: "Clogged bathroom drain", status: "open", createdAt: "2023-12-10T09:00:00Z" },
  { id: "47", propertyId: "47", tenantId: "47", description: "Broken garage door opener", status: "in_progress", createdAt: "2023-12-11T10:00:00Z" },
  { id: "48", propertyId: "48", tenantId: "48", description: "No power in kitchen", status: "closed", createdAt: "2023-11-02T11:00:00Z", updatedAt: "2023-11-03T10:00:00Z" },
  { id: "49", propertyId: "49", tenantId: "49", description: "Broken window lock", status: "open", createdAt: "2023-12-12T12:00:00Z" },
  { id: "50", propertyId: "50", tenantId: "50", description: "Leaking pipe in basement", status: "in_progress", createdAt: "2023-12-13T13:00:00Z" },
];

export async function getMaintenanceData(): Promise<MaintenanceData[]> {
  return maintenanceData;
} 