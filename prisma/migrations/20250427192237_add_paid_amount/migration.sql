-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "paidAmount" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';
