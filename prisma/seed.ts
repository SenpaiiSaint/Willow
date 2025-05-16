import { PrismaClient, RoleType, Currency, PaymentStatus, PaymentMethod, MaintenanceStatus, LeaseStatus } from '../lib/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create roles first
  const adminRole = await prisma.role.upsert({
    where: { name: RoleType.ADMIN },
    update: {},
    create: { name: RoleType.ADMIN },
  });

  const ownerRole = await prisma.role.upsert({
    where: { name: RoleType.OWNER },
    update: {},
    create: { name: RoleType.OWNER },
  });

  const managerRole = await prisma.role.upsert({
    where: { name: RoleType.PROPERTY_MANAGER },
    update: {},
    create: { name: RoleType.PROPERTY_MANAGER },
  });

  const tenantRole = await prisma.role.upsert({
    where: { name: RoleType.TENANT },
    update: {},
    create: { name: RoleType.TENANT },
  });

  // Create users with roles
  const admin = await prisma.user.upsert({
    where: { email: 'admin@demo.com' },
    update: {},
    create: {
      email: 'admin@demo.com',
      name: 'Admin User',
      password: await bcrypt.hash('admin123', 10),
      roleId: adminRole.id,
      isVerified: true,
    },
  });

  // Create organization with admin
  const organization = await prisma.organization.upsert({
    where: { name: 'Demo Property Management' },
    update: {},
    create: {
      name: 'Demo Property Management',
      currency: Currency.USD,
      timezone: 'America/New_York',
      users: {
        connect: { id: admin.id }
      }
    },
  });

  // Update admin with organization
  await prisma.user.update({
    where: { id: admin.id },
    data: { organizationId: organization.id }
  });

  // Create remaining users
  const owner = await prisma.user.upsert({
    where: { email: 'owner@demo.com' },
    update: {},
    create: {
      email: 'owner@demo.com',
      name: 'Property Owner',
      password: await bcrypt.hash('owner123', 10),
      roleId: ownerRole.id,
      organizationId: organization.id,
      isVerified: true,
    },
  });

  const manager = await prisma.user.upsert({
    where: { email: 'manager@demo.com' },
    update: {},
    create: {
      email: 'manager@demo.com',
      name: 'Property Manager',
      password: await bcrypt.hash('manager123', 10),
      roleId: managerRole.id,
      organizationId: organization.id,
      isVerified: true,
    },
  });

  const tenant = await prisma.user.upsert({
    where: { email: 'tenant@demo.com' },
    update: {},
    create: {
      email: 'tenant@demo.com',
      name: 'Demo Tenant',
      password: await bcrypt.hash('tenant123', 10),
      roleId: tenantRole.id,
      organizationId: organization.id,
      isVerified: true,
    },
  });

  // Create property
  const property = await prisma.property.upsert({
    where: { 
      organizationId_address: {
        organizationId: organization.id,
        address: '123 Main St',
      }
    },
    update: {},
    create: {
      organizationId: organization.id,
      ownerId: owner.id,
      address: '123 Main St',
      unit: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
    },
  });

  // Create property manager record
  await prisma.propertyManager.upsert({
    where: {
      userId_propertyId: {
        userId: manager.id,
        propertyId: property.id,
      }
    },
    update: {},
    create: {
      userId: manager.id,
      propertyId: property.id,
    },
  });

  // Create tenant record
  const tenantRecord = await prisma.tenant.upsert({
    where: {
      userId_propertyId: {
        userId: tenant.id,
        propertyId: property.id,
      }
    },
    update: {},
    create: {
      userId: tenant.id,
      propertyId: property.id,
    },
  });

  // Create lease
  const lease = await prisma.lease.upsert({
    where: { tenantId: tenantRecord.id },
    update: {},
    create: {
      propertyId: property.id,
      tenantId: tenantRecord.id,
      status: LeaseStatus.ACTIVE,
      rentAmount: 2000.00,
      currency: Currency.USD,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      deposit: 2000.00,
    },
  });

  // Update tenant record with lease
  await prisma.tenant.update({
    where: { id: tenantRecord.id },
    data: { leaseId: lease.id },
  });

  // Create payment
  await prisma.payment.upsert({
    where: {
      leaseId_propertyId_tenantId: {
        leaseId: lease.id,
        propertyId: property.id,
        tenantId: tenant.id,
      }
    },
    update: {},
    create: {
      leaseId: lease.id,
      propertyId: property.id,
      tenantId: tenant.id,
      amount: 2000.00,
      status: PaymentStatus.PAID,
      method: PaymentMethod.BANK_TRANSFER,
      dueDate: new Date('2024-01-01'),
      paidAt: new Date('2024-01-01'),
    },
  });

  // Create maintenance request
  await prisma.maintenanceRequest.upsert({
    where: {
      propertyId_tenantId: {
        propertyId: property.id,
        tenantId: tenant.id,
      }
    },
    update: {},
    create: {
      propertyId: property.id,
      tenantId: tenant.id,
      assignedTo: manager.id,
      type: 'Plumbing',
      status: MaintenanceStatus.PENDING,
      description: 'Leaking faucet in kitchen',
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
