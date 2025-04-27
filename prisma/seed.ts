import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Starting seed...')
    
    // First, try to delete existing data
    console.log('Cleaning up existing data...')
    await prisma.payment.deleteMany()
    await prisma.invoice.deleteMany()
    await prisma.maintenanceRequest.deleteMany()
    await prisma.leaseAgreement.deleteMany()
    await prisma.document.deleteMany()
    await prisma.notification.deleteMany()
    await prisma.property.deleteMany()
    await prisma.tenant.deleteMany()
    console.log('Cleanup completed')

    // Create tenants
    console.log('Creating tenants...')
    const usaTenants = await Promise.all([
      // Northeast
      prisma.tenant.create({
        data: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          address: '123 Main St, New York, NY'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '+1987654321',
          address: '456 Oak Ave, Boston, MA'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Michael Brown',
          email: 'michael.b@example.com',
          phone: '+1234567891',
          address: '789 Pine St, Philadelphia, PA'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Sarah Wilson',
          email: 'sarah.w@example.com',
          phone: '+1234567892',
          address: '321 Maple Ave, Providence, RI'
        }
      }),
      // West Coast
      prisma.tenant.create({
        data: {
          name: 'Emily Davis',
          email: 'emily.d@example.com',
          phone: '+1234567894',
          address: '987 Palm Ave, Los Angeles, CA'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'James Wilson',
          email: 'james.w@example.com',
          phone: '+1234567895',
          address: '741 Beach Rd, San Francisco, CA'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Lisa Anderson',
          email: 'lisa.a@example.com',
          phone: '+1234567896',
          address: '852 Rain St, Seattle, WA'
        }
      }),
      // South
      prisma.tenant.create({
        data: {
          name: 'Sarah Johnson',
          email: 'sarah.j@example.com',
          phone: '+1234567897',
          address: '852 Palm Blvd, Miami, FL'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Robert Taylor',
          email: 'robert.t@example.com',
          phone: '+1234567898',
          address: '963 Oak St, Houston, TX'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Patricia Brown',
          email: 'patricia.b@example.com',
          phone: '+1234567899',
          address: '159 Magnolia Dr, New Orleans, LA'
        }
      }),
      // Midwest
      prisma.tenant.create({
        data: {
          name: 'William Johnson',
          email: 'william.j@example.com',
          phone: '+1234567800',
          address: '753 Lake St, Chicago, IL'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Elizabeth Clark',
          email: 'elizabeth.c@example.com',
          phone: '+1234567801',
          address: '246 Prairie Ln, Milwaukee, WI'
        }
      })
    ])
    console.log('Created USA tenants:', usaTenants.length)

    const internationalTenants = await Promise.all([
      // Europe
      prisma.tenant.create({
        data: {
          name: 'Sophie Martin',
          email: 'sophie.m@example.com',
          phone: '+33123456789',
          address: '321 Rue de Paris, Paris, France'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Hans Schmidt',
          email: 'hans.s@example.com',
          phone: '+49123456789',
          address: '654 Berliner Str, Berlin, Germany'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Marco Rossi',
          email: 'marco.r@example.com',
          phone: '+39123456789',
          address: '789 Via Roma, Rome, Italy'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Sofia Garcia',
          email: 'sofia.g@example.com',
          phone: '+34612345678',
          address: '456 Calle Mayor, Madrid, Spain'
        }
      }),
      // Asia
      prisma.tenant.create({
        data: {
          name: 'Yuki Tanaka',
          email: 'yuki.t@example.com',
          phone: '+81312345678',
          address: '159 Ginza, Tokyo, Japan'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Li Wei',
          email: 'li.w@example.com',
          phone: '+861234567890',
          address: '753 Nanjing Rd, Shanghai, China'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Priya Patel',
          email: 'priya.p@example.com',
          phone: '+919876543210',
          address: '852 Marine Drive, Mumbai, India'
        }
      }),
      prisma.tenant.create({
        data: {
          name: 'Min-jun Kim',
          email: 'minjun.k@example.com',
          phone: '+821012345678',
          address: '963 Gangnam-daero, Seoul, South Korea'
        }
      })
    ])
    console.log('Created international tenants:', internationalTenants.length)

    // Create properties
    console.log('Creating properties...')
    const properties = await Promise.all([
      // Apartments
      prisma.property.create({
        data: {
          address: '123 Main St, New York, NY',
          type: 'Apartment',
          size: 1200,
          bedrooms: 2,
          bathrooms: 1.5,
          amenities: ['Parking', 'Gym', 'Pool'],
          status: 'OCCUPIED'
        }
      }),
      prisma.property.create({
        data: {
          address: '456 Oak Ave, Boston, MA',
          type: 'Apartment',
          size: 1000,
          bedrooms: 1,
          bathrooms: 1,
          amenities: ['Parking', 'Laundry'],
          status: 'OCCUPIED'
        }
      }),
      prisma.property.create({
        data: {
          address: '789 Pine St, Los Angeles, CA',
          type: 'Apartment',
          size: 1500,
          bedrooms: 2,
          bathrooms: 2,
          amenities: ['Parking', 'Gym', 'Pool', 'Doorman'],
          status: 'OCCUPIED'
        }
      }),
      // Houses
      prisma.property.create({
        data: {
          address: '321 Beach Rd, Miami, FL',
          type: 'House',
          size: 2500,
          bedrooms: 4,
          bathrooms: 3,
          amenities: ['Pool', 'Garden', 'Garage', 'Beach Access'],
          status: 'VACANT'
        }
      }),
      prisma.property.create({
        data: {
          address: '654 Market St, San Francisco, CA',
          type: 'House',
          size: 3000,
          bedrooms: 5,
          bathrooms: 3.5,
          amenities: ['Garage', 'Garden', 'Fireplace', 'View'],
          status: 'OCCUPIED'
        }
      }),
      // Condos
      prisma.property.create({
        data: {
          address: '987 High St, Chicago, IL',
          type: 'Condo',
          size: 1800,
          bedrooms: 3,
          bathrooms: 2,
          amenities: ['Parking', 'Gym', 'Doorman', 'Roof Deck'],
          status: 'OCCUPIED'
        }
      }),
      prisma.property.create({
        data: {
          address: '753 River Rd, Seattle, WA',
          type: 'Condo',
          size: 1600,
          bedrooms: 2,
          bathrooms: 2,
          amenities: ['Parking', 'Gym', 'Security', 'View'],
          status: 'VACANT'
        }
      }),
      // Townhouses
      prisma.property.create({
        data: {
          address: '159 Garden Ave, Austin, TX',
          type: 'Townhouse',
          size: 2200,
          bedrooms: 3,
          bathrooms: 2.5,
          amenities: ['Garage', 'Garden', 'Community Pool'],
          status: 'OCCUPIED'
        }
      })
    ])
    console.log('Created properties:', properties.length)

    // Create lease agreements
    console.log('Creating lease agreements...')
    const leases = await Promise.all([
      prisma.leaseAgreement.create({
        data: {
          tenantId: usaTenants[0].id,
          propertyId: properties[0].id,
          startDate: new Date('2024-01-01'),
          endDate: new Date('2024-12-31'),
          rentAmount: 2500,
          securityDeposit: 5000,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      }),
      prisma.leaseAgreement.create({
        data: {
          tenantId: usaTenants[1].id,
          propertyId: properties[1].id,
          startDate: new Date('2024-02-01'),
          endDate: new Date('2025-01-31'),
          rentAmount: 2000,
          securityDeposit: 4000,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      }),
      prisma.leaseAgreement.create({
        data: {
          tenantId: usaTenants[4].id,
          propertyId: properties[2].id,
          startDate: new Date('2024-03-01'),
          endDate: new Date('2025-02-28'),
          rentAmount: 3500,
          securityDeposit: 7000,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      }),
      prisma.leaseAgreement.create({
        data: {
          tenantId: internationalTenants[0].id,
          propertyId: properties[4].id,
          startDate: new Date('2024-01-15'),
          endDate: new Date('2025-01-14'),
          rentAmount: 3000,
          securityDeposit: 6000,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      }),
      prisma.leaseAgreement.create({
        data: {
          tenantId: usaTenants[10].id,
          propertyId: properties[5].id,
          startDate: new Date('2024-02-15'),
          endDate: new Date('2025-02-14'),
          rentAmount: 2800,
          securityDeposit: 5600,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      }),
      prisma.leaseAgreement.create({
        data: {
          tenantId: internationalTenants[4].id,
          propertyId: properties[7].id,
          startDate: new Date('2024-03-15'),
          endDate: new Date('2025-03-14'),
          rentAmount: 3200,
          securityDeposit: 6400,
          terms: 'Standard 1-year lease agreement',
          status: 'ACTIVE'
        }
      })
    ])
    console.log('Created lease agreements:', leases.length)

    // Create invoices
    console.log('Creating invoices...')
    const invoices = await Promise.all([
      prisma.invoice.create({
        data: {
          tenantId: usaTenants[0].id,
          propertyId: properties[0].id,
          amount: 2500,
          dueDate: new Date('2024-05-01'),
          description: 'Monthly rent for May 2024',
          status: 'UNPAID'
        }
      }),
      prisma.invoice.create({
        data: {
          tenantId: usaTenants[1].id,
          propertyId: properties[1].id,
          amount: 2000,
          dueDate: new Date('2024-05-01'),
          description: 'Monthly rent for May 2024',
          status: 'PAID',
          paidAmount: 2000
        }
      }),
      prisma.invoice.create({
        data: {
          tenantId: usaTenants[4].id,
          propertyId: properties[2].id,
          amount: 3500,
          dueDate: new Date('2024-05-01'),
          description: 'Monthly rent for May 2024',
          status: 'PARTIALLY_PAID',
          paidAmount: 2000
        }
      }),
      prisma.invoice.create({
        data: {
          tenantId: internationalTenants[0].id,
          propertyId: properties[4].id,
          amount: 3000,
          dueDate: new Date('2024-05-01'),
          description: 'Monthly rent for May 2024',
          status: 'UNPAID'
        }
      }),
      prisma.invoice.create({
        data: {
          tenantId: usaTenants[10].id,
          propertyId: properties[5].id,
          amount: 2800,
          dueDate: new Date('2024-05-01'),
          description: 'Monthly rent for May 2024',
          status: 'PAID',
          paidAmount: 2800
        }
      })
    ])
    console.log('Created invoices:', invoices.length)

    // Create maintenance requests
    console.log('Creating maintenance requests...')
    const maintenance = await Promise.all([
      prisma.maintenanceRequest.create({
        data: {
          propertyId: properties[0].id,
          tenantId: usaTenants[0].id,
          type: 'Plumbing',
          priority: 'MEDIUM',
          status: 'PENDING',
          description: 'Kitchen sink is leaking'
        }
      }),
      prisma.maintenanceRequest.create({
        data: {
          propertyId: properties[1].id,
          tenantId: usaTenants[1].id,
          type: 'Electrical',
          priority: 'HIGH',
          status: 'IN_PROGRESS',
          description: 'Power outage in living room'
        }
      }),
      prisma.maintenanceRequest.create({
        data: {
          propertyId: properties[2].id,
          tenantId: usaTenants[4].id,
          type: 'HVAC',
          priority: 'HIGH',
          status: 'PENDING',
          description: 'AC not cooling properly'
        }
      }),
      prisma.maintenanceRequest.create({
        data: {
          propertyId: properties[4].id,
          tenantId: internationalTenants[0].id,
          type: 'Appliance',
          priority: 'LOW',
          status: 'PENDING',
          description: 'Dishwasher not draining properly'
        }
      }),
      prisma.maintenanceRequest.create({
        data: {
          propertyId: properties[5].id,
          tenantId: usaTenants[10].id,
          type: 'Structural',
          priority: 'HIGH',
          status: 'IN_PROGRESS',
          description: 'Crack in living room wall'
        }
      })
    ])
    console.log('Created maintenance requests:', maintenance.length)

    // Create payments
    console.log('Creating payments...')
    const payments = await Promise.all([
      prisma.payment.create({
        data: {
          invoiceId: invoices[1].id,
          tenantId: usaTenants[1].id,
          amount: 2000,
          status: 'COMPLETED',
          method: 'Credit Card',
          reference: 'PAY-123456'
        }
      }),
      prisma.payment.create({
        data: {
          invoiceId: invoices[2].id,
          tenantId: usaTenants[4].id,
          amount: 2000,
          status: 'COMPLETED',
          method: 'Bank Transfer',
          reference: 'PAY-123457'
        }
      }),
      prisma.payment.create({
        data: {
          invoiceId: invoices[4].id,
          tenantId: usaTenants[10].id,
          amount: 2800,
          status: 'COMPLETED',
          method: 'Credit Card',
          reference: 'PAY-123458'
        }
      })
    ])
    console.log('Created payments:', payments.length)

    // Create documents
    console.log('Creating documents...')
    const documents = await Promise.all([
      prisma.document.create({
        data: {
          type: 'Lease Agreement',
          filePath: '/documents/leases/lease1.pdf',
          fileName: 'lease1.pdf',
          status: 'ACTIVE',
          tenantId: usaTenants[0].id,
          propertyId: properties[0].id
        }
      }),
      prisma.document.create({
        data: {
          type: 'ID',
          filePath: '/documents/ids/id1.pdf',
          fileName: 'id1.pdf',
          status: 'ACTIVE',
          tenantId: usaTenants[0].id
        }
      }),
      prisma.document.create({
        data: {
          type: 'Invoice',
          filePath: '/documents/invoices/invoice1.pdf',
          fileName: 'invoice1.pdf',
          status: 'ACTIVE',
          tenantId: usaTenants[1].id,
          propertyId: properties[1].id
        }
      })
    ])
    console.log('Created documents:', documents.length)

    // Create notifications
    console.log('Creating notifications...')
    const notifications = await Promise.all([
      prisma.notification.create({
        data: {
          type: 'Payment',
          message: 'Payment of $2000.00 has been received',
          priority: 'NORMAL',
          tenantId: usaTenants[1].id,
          propertyId: properties[1].id
        }
      }),
      prisma.notification.create({
        data: {
          type: 'Maintenance',
          message: 'Your maintenance request has been assigned',
          priority: 'NORMAL',
          tenantId: usaTenants[0].id,
          propertyId: properties[0].id
        }
      }),
      prisma.notification.create({
        data: {
          type: 'Lease',
          message: 'Your lease agreement is expiring in 30 days',
          priority: 'HIGH',
          tenantId: usaTenants[0].id,
          propertyId: properties[0].id
        }
      })
    ])
    console.log('Created notifications:', notifications.length)

    console.log('Seed completed successfully!')
  } catch (error) {
    console.error('Error during seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
