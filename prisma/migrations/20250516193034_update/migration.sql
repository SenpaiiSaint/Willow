/*
  Warnings:

  - You are about to alter the column `rentAmount` on the `Lease` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `deposit` on the `Lease` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - A unique constraint covering the columns `[userId,propertyId]` on the table `Tenant` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `status` on the `Lease` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currency` on the `Lease` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `deposit` on table `Lease` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Tenant_leaseId_key";

-- AlterTable
ALTER TABLE "Lease" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "rentAmount" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "currency",
ADD COLUMN     "currency" TEXT NOT NULL,
ALTER COLUMN "deposit" SET NOT NULL,
ALTER COLUMN "deposit" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "leaseId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Lease_propertyId_idx" ON "Lease"("propertyId");

-- CreateIndex
CREATE INDEX "Lease_tenantId_idx" ON "Lease"("tenantId");

-- CreateIndex
CREATE INDEX "Tenant_userId_idx" ON "Tenant"("userId");

-- CreateIndex
CREATE INDEX "Tenant_propertyId_idx" ON "Tenant"("propertyId");

-- CreateIndex
CREATE INDEX "Tenant_leaseId_idx" ON "Tenant"("leaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_userId_propertyId_key" ON "Tenant"("userId", "propertyId");
