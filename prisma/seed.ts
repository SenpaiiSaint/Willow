import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // USA Tenants (25)
  const usaTenants = await Promise.all([
    // Northeast
    prisma.tenant.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main St, Apt 4B, New York, NY',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1987654321',
        address: '456 Oak Ave, Unit 2, Boston, MA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Michael Brown',
        email: 'michael.b@example.com',
        phone: '+1234567891',
        address: '789 Pine St, Philadelphia, PA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Sarah Wilson',
        email: 'sarah.w@example.com',
        phone: '+1234567892',
        address: '321 Maple Ave, Providence, RI',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'David Miller',
        email: 'david.m@example.com',
        phone: '+1234567893',
        address: '654 Birch St, Hartford, CT',
      },
    }),
    // West Coast
    prisma.tenant.create({
      data: {
        name: 'Emily Davis',
        email: 'emily.d@example.com',
        phone: '+1234567894',
        address: '987 Palm Ave, Los Angeles, CA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'James Wilson',
        email: 'james.w@example.com',
        phone: '+1234567895',
        address: '741 Beach Rd, San Francisco, CA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Lisa Anderson',
        email: 'lisa.a@example.com',
        phone: '+1234567896',
        address: '852 Rain St, Seattle, WA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Robert Taylor',
        email: 'robert.t@example.com',
        phone: '+1234567897',
        address: '963 Cloud Ave, Portland, OR',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Jennifer Martinez',
        email: 'jennifer.m@example.com',
        phone: '+1234567898',
        address: '159 Sun Blvd, San Diego, CA',
      },
    }),
    // Midwest
    prisma.tenant.create({
      data: {
        name: 'William Johnson',
        email: 'william.j@example.com',
        phone: '+1234567899',
        address: '753 Lake St, Chicago, IL',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Patricia Brown',
        email: 'patricia.b@example.com',
        phone: '+1234567800',
        address: '951 River Rd, Detroit, MI',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Thomas Moore',
        email: 'thomas.m@example.com',
        phone: '+1234567801',
        address: '357 Forest Ave, Minneapolis, MN',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Elizabeth Clark',
        email: 'elizabeth.c@example.com',
        phone: '+1234567802',
        address: '246 Prairie Ln, Milwaukee, WI',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Kevin White',
        email: 'kevin.w@example.com',
        phone: '+1234567803',
        address: '135 Field St, Cleveland, OH',
      },
    }),
    // South
    prisma.tenant.create({
      data: {
        name: 'Margaret Lee',
        email: 'margaret.l@example.com',
        phone: '+1234567804',
        address: '864 Peach St, Atlanta, GA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Daniel Harris',
        email: 'daniel.h@example.com',
        phone: '+1234567805',
        address: '975 Orange Ave, Miami, FL',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Nancy Rodriguez',
        email: 'nancy.r@example.com',
        phone: '+1234567806',
        address: '753 Palm Blvd, Houston, TX',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Christopher Lee',
        email: 'chris.l@example.com',
        phone: '+1234567807',
        address: '159 Magnolia Dr, New Orleans, LA',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Amanda Walker',
        email: 'amanda.w@example.com',
        phone: '+1234567808',
        address: '951 Cotton Rd, Nashville, TN',
      },
    }),
    // Mountain/Southwest
    prisma.tenant.create({
      data: {
        name: 'Joseph King',
        email: 'joseph.k@example.com',
        phone: '+1234567809',
        address: '357 Desert Ave, Phoenix, AZ',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Michelle Scott',
        email: 'michelle.s@example.com',
        phone: '+1234567810',
        address: '246 Mountain Rd, Denver, CO',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Steven Green',
        email: 'steven.g@example.com',
        phone: '+1234567811',
        address: '135 Canyon St, Salt Lake City, UT',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Rebecca Adams',
        email: 'rebecca.a@example.com',
        phone: '+1234567812',
        address: '864 Mesa Blvd, Albuquerque, NM',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Ryan Baker',
        email: 'ryan.b@example.com',
        phone: '+1234567813',
        address: '975 Valley Rd, Las Vegas, NV',
      },
    }),
  ]);

  // Caribbean Tenants (5)
  const caribbeanTenants = await Promise.all([
    prisma.tenant.create({
      data: {
        name: 'Carlos Rivera',
        email: 'carlos.r@example.com',
        phone: '+1787123456',
        address: '123 Flamboyant St, San Juan, Puerto Rico',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Maria Santos',
        email: 'maria.s@example.com',
        phone: '+1809234567',
        address: '456 Palm Beach Dr, Santo Domingo, Dominican Republic',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'John Baptiste',
        email: 'john.b@example.com',
        phone: '+1868345678',
        address: '789 Marina Way, Port of Spain, Trinidad',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Sophie Martin',
        email: 'sophie.m@example.com',
        phone: '+590123456',
        address: '321 Beach Front, Gustavia, St. Barthélemy',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Marcus Johnson',
        email: 'marcus.j@example.com',
        phone: '+1242456789',
        address: '654 Paradise Dr, Nassau, Bahamas',
      },
    }),
  ]);

  // Europe, Asia, and Japan Tenants (15)
  const internationalTenants = await Promise.all([
    // Europe (6)
    prisma.tenant.create({
      data: {
        name: 'Pierre Dubois',
        email: 'pierre.d@example.com',
        phone: '+33123456789',
        address: '123 Rue de la Paix, Paris, France',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Anna Schmidt',
        email: 'anna.s@example.com',
        phone: '+49987654321',
        address: '456 Hauptstraße, Berlin, Germany',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Marco Rossi',
        email: 'marco.r@example.com',
        phone: '+39123456789',
        address: '789 Via Roma, Rome, Italy',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Sofia Garcia',
        email: 'sofia.g@example.com',
        phone: '+34612345678',
        address: '321 Calle Mayor, Madrid, Spain',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Eva Andersson',
        email: 'eva.a@example.com',
        phone: '+46701234567',
        address: '654 Kungsgatan, Stockholm, Sweden',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Liam O\'Connor',
        email: 'liam.o@example.com',
        phone: '+353871234567',
        address: '987 O\'Connell St, Dublin, Ireland',
      },
    }),
    // Asia (5)
    prisma.tenant.create({
      data: {
        name: 'Wei Chen',
        email: 'wei.c@example.com',
        phone: '+861234567890',
        address: '741 Nanjing Rd, Shanghai, China',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Priya Patel',
        email: 'priya.p@example.com',
        phone: '+919876543210',
        address: '852 Marine Drive, Mumbai, India',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Min-jun Kim',
        email: 'minjun.k@example.com',
        phone: '+821012345678',
        address: '963 Gangnam-daero, Seoul, South Korea',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Ahmad Rahman',
        email: 'ahmad.r@example.com',
        phone: '+60123456789',
        address: '159 Jalan Sultan, Kuala Lumpur, Malaysia',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Somchai Suk',
        email: 'somchai.s@example.com',
        phone: '+66891234567',
        address: '753 Sukhumvit Rd, Bangkok, Thailand',
      },
    }),
    // Japan (4)
    prisma.tenant.create({
      data: {
        name: 'Yuki Tanaka',
        email: 'yuki.t@example.com',
        phone: '+81312345678',
        address: '951 Ginza, Tokyo, Japan',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Hiroshi Sato',
        email: 'hiroshi.s@example.com',
        phone: '+81612345678',
        address: '357 Dotonbori, Osaka, Japan',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Akiko Yamamoto',
        email: 'akiko.y@example.com',
        phone: '+81227654321',
        address: '246 Kawaramachi, Kyoto, Japan',
      },
    }),
    prisma.tenant.create({
      data: {
        name: 'Kenji Nakamura',
        email: 'kenji.n@example.com',
        phone: '+81452345678',
        address: '135 Sakae, Nagoya, Japan',
      },
    }),
  ]);

  // Create sample properties
  const property1 = await prisma.property.create({
    data: {
      address: '123 Main St',
      type: 'Apartment',
      size: 1200,
      bedrooms: 2,
      bathrooms: 1.5,
      amenities: ['Parking', 'Gym', 'Pool'],
      status: 'OCCUPIED',
    },
  });

  const property2 = await prisma.property.create({
    data: {
      address: '456 Oak Ave',
      type: 'House',
      size: 2000,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ['Garage', 'Garden', 'Fireplace'],
      status: 'OCCUPIED',
    },
  });

  // Create sample invoices for USA tenants
  const usaInvoices = await Promise.all([
    // Northeast
    prisma.invoice.create({
      data: {
        tenantId: usaTenants[0].id,
        propertyId: property1.id,
        amount: 1500.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 1500.00,
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: usaTenants[1].id,
        propertyId: property2.id,
        amount: 2000.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'UNPAID',
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: usaTenants[2].id,
        propertyId: property1.id,
        amount: 1800.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PARTIALLY_PAID',
        paidAmount: 900.00,
      },
    }),
    // West Coast
    prisma.invoice.create({
      data: {
        tenantId: usaTenants[5].id,
        propertyId: property2.id,
        amount: 2500.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 2500.00,
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: usaTenants[6].id,
        propertyId: property1.id,
        amount: 3000.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'UNPAID',
      },
    }),
  ]);

  // Create invoices for Caribbean tenants
  const caribbeanInvoices = await Promise.all([
    prisma.invoice.create({
      data: {
        tenantId: caribbeanTenants[0].id,
        propertyId: property1.id,
        amount: 1200.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 1200.00,
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: caribbeanTenants[1].id,
        propertyId: property2.id,
        amount: 1500.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'UNPAID',
      },
    }),
  ]);

  // Create invoices for international tenants
  const internationalInvoices = await Promise.all([
    // Europe
    prisma.invoice.create({
      data: {
        tenantId: internationalTenants[0].id,
        propertyId: property1.id,
        amount: 2000.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 2000.00,
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: internationalTenants[1].id,
        propertyId: property2.id,
        amount: 1800.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PARTIALLY_PAID',
        paidAmount: 900.00,
      },
    }),
    // Asia
    prisma.invoice.create({
      data: {
        tenantId: internationalTenants[6].id,
        propertyId: property1.id,
        amount: 2500.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 2500.00,
      },
    }),
    prisma.invoice.create({
      data: {
        tenantId: internationalTenants[7].id,
        propertyId: property2.id,
        amount: 2200.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'UNPAID',
      },
    }),
    // Japan
    prisma.invoice.create({
      data: {
        tenantId: internationalTenants[11].id,
        propertyId: property1.id,
        amount: 3000.00,
        dueDate: new Date('2024-05-01'),
        description: 'Monthly rent for April 2024',
        status: 'PAID',
        paidAmount: 3000.00,
      },
    }),
  ]);

  // Create sample payments for paid invoices
  await Promise.all([
    // USA payments
    prisma.payment.create({
      data: {
        invoiceId: usaInvoices[0].id,
        tenantId: usaTenants[0].id,
        amount: 1500.00,
        status: 'COMPLETED',
        method: 'Credit Card',
        reference: 'PAY-123456',
      },
    }),
    prisma.payment.create({
      data: {
        invoiceId: usaInvoices[3].id,
        tenantId: usaTenants[5].id,
        amount: 2500.00,
        status: 'COMPLETED',
        method: 'Bank Transfer',
        reference: 'PAY-123457',
      },
    }),
    // Caribbean payments
    prisma.payment.create({
      data: {
        invoiceId: caribbeanInvoices[0].id,
        tenantId: caribbeanTenants[0].id,
        amount: 1200.00,
        status: 'COMPLETED',
        method: 'Credit Card',
        reference: 'PAY-123458',
      },
    }),
    // International payments
    prisma.payment.create({
      data: {
        invoiceId: internationalInvoices[0].id,
        tenantId: internationalTenants[0].id,
        amount: 2000.00,
        status: 'COMPLETED',
        method: 'Bank Transfer',
        reference: 'PAY-123459',
      },
    }),
    prisma.payment.create({
      data: {
        invoiceId: internationalInvoices[2].id,
        tenantId: internationalTenants[6].id,
        amount: 2500.00,
        status: 'COMPLETED',
        method: 'Credit Card',
        reference: 'PAY-123460',
      },
    }),
    prisma.payment.create({
      data: {
        invoiceId: internationalInvoices[4].id,
        tenantId: internationalTenants[11].id,
        amount: 3000.00,
        status: 'COMPLETED',
        method: 'Bank Transfer',
        reference: 'PAY-123461',
      },
    }),
  ]);

  // Create sample lease agreements
  await Promise.all([
    // USA leases
    prisma.leaseAgreement.create({
      data: {
        tenantId: usaTenants[0].id,
        propertyId: property1.id,
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-12-31'),
        rentAmount: 1500.00,
        securityDeposit: 3000.00,
        terms: 'Standard 1-year lease agreement',
        status: 'ACTIVE',
      },
    }),
    prisma.leaseAgreement.create({
      data: {
        tenantId: usaTenants[1].id,
        propertyId: property2.id,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2025-01-31'),
        rentAmount: 2000.00,
        securityDeposit: 4000.00,
        terms: 'Standard 1-year lease agreement',
        status: 'ACTIVE',
      },
    }),
    // Caribbean leases
    prisma.leaseAgreement.create({
      data: {
        tenantId: caribbeanTenants[0].id,
        propertyId: property1.id,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2025-02-28'),
        rentAmount: 1200.00,
        securityDeposit: 2400.00,
        terms: 'Standard 1-year lease agreement',
        status: 'ACTIVE',
      },
    }),
    // International leases
    prisma.leaseAgreement.create({
      data: {
        tenantId: internationalTenants[0].id,
        propertyId: property2.id,
        startDate: new Date('2024-01-15'),
        endDate: new Date('2025-01-14'),
        rentAmount: 2000.00,
        securityDeposit: 4000.00,
        terms: 'Standard 1-year lease agreement',
        status: 'ACTIVE',
      },
    }),
  ]);

  // Create sample maintenance requests
  await Promise.all([
    prisma.maintenanceRequest.create({
      data: {
        propertyId: property1.id,
        tenantId: usaTenants[0].id,
        type: 'Plumbing',
        priority: 'MEDIUM',
        status: 'PENDING',
        description: 'Kitchen sink is leaking',
      },
    }),
    prisma.maintenanceRequest.create({
      data: {
        propertyId: property2.id,
        tenantId: caribbeanTenants[0].id,
        type: 'Electrical',
        priority: 'HIGH',
        status: 'IN_PROGRESS',
        description: 'Power outage in living room',
      },
    }),
  ]);

  // Create sample notifications
  await Promise.all([
    prisma.notification.create({
      data: {
        type: 'Payment',
        message: 'Payment of $1500.00 has been received',
        priority: 'NORMAL',
        tenantId: usaTenants[0].id,
        propertyId: property1.id,
      },
    }),
    prisma.notification.create({
      data: {
        type: 'Maintenance',
        message: 'Maintenance request has been assigned',
        priority: 'NORMAL',
        tenantId: caribbeanTenants[0].id,
        propertyId: property2.id,
      },
    }),
  ]);

  console.log('Sample data has been created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 