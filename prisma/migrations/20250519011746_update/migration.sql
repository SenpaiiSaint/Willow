/*
  Warnings:

  - A unique constraint covering the columns `[propertyId,tenantId]` on the table `MaintenanceRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[leaseId,propertyId,tenantId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organizationId,address]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,propertyId]` on the table `PropertyManager` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MaintenanceRequest_propertyId_tenantId_key" ON "MaintenanceRequest"("propertyId", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_leaseId_propertyId_tenantId_key" ON "Payment"("leaseId", "propertyId", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Property_organizationId_address_key" ON "Property"("organizationId", "address");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyManager_userId_propertyId_key" ON "PropertyManager"("userId", "propertyId");
