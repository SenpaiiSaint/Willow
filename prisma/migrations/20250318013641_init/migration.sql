/*
  Warnings:

  - You are about to alter the column `amount` on the `RentPayment` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Decimal(10,2)`.
  - The `status` column on the `RentPayment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `RentPayment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tenant` table without a default value. This is not possible if the table is not empty.
*/

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('UNPAID', 'PAID', 'OVERDUE');

-- DropForeignKey
ALTER TABLE "RentPayment" DROP CONSTRAINT "RentPayment_tenantId_fkey";

-- AlterTable
ALTER TABLE "RentPayment"
    ADD COLUMN "invoiceId" INTEGER,
    ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL,
    ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2),
    DROP COLUMN "status",
    ADD COLUMN "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Tenant"
    ADD COLUMN "address" TEXT,
    ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN "phone" TEXT,
    ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paidAmount" DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'UNPAID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RentPayment"
    ADD CONSTRAINT "RentPayment_tenantId_fkey"
    FOREIGN KEY ("tenantId")
    REFERENCES "Tenant"("id")
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentPayment"
    ADD CONSTRAINT "RentPayment_invoiceId_fkey"
    FOREIGN KEY ("invoiceId")
    REFERENCES "Invoice"("id")
    ON DELETE SET NULL
    ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice"
    ADD CONSTRAINT "Invoice_tenantId_fkey"
    FOREIGN KEY ("tenantId")
    REFERENCES "Tenant"("id")
    ON DELETE RESTRICT
    ON UPDATE CASCADE;


-- -------------------------------------------------------------
-- SEED DATA SECTION
-- (Will run once this migration is applied)
-- -------------------------------------------------------------

-- Insert sample tenants:
INSERT INTO "Tenant" ("name", "email", "phone", "address", "createdAt", "updatedAt")
VALUES
('John Doe', 'john@example.com', '555-1234', '123 Main St', NOW(), NOW()),
('Jane Roe', 'jane@example.com', '555-5678', '456 Maple Dr', NOW(), NOW());

-- Insert sample invoices:
INSERT INTO "Invoice" ("tenantId", "amount", "paidAmount", "dueDate", "status", "createdAt", "updatedAt")
VALUES
(1, 1200.00, 0.00, NOW() + INTERVAL '7 days', 'UNPAID', NOW(), NOW()),
(2, 900.00, 0.00, NOW() + INTERVAL '10 days', 'UNPAID', NOW(), NOW());

-- Insert sample rent payments (linking to the newly created invoices):
INSERT INTO "RentPayment" ("tenantId", "amount", "status", "createdAt", "updatedAt", "invoiceId")
VALUES
(1, 1200.00, 'PENDING', NOW(), NOW(), 1),
(2, 900.00, 'PENDING', NOW(), NOW(), 2);
