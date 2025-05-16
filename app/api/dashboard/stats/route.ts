import { NextResponse } from 'next/server';
import  {prisma}  from '@/lib/prisma';
import { verify } from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key') as {
      userId: string;
      organizationId: string;
    };

    if (!decoded.organizationId) {
      return NextResponse.json(
        { error: 'Organization ID required' },
        { status: 401 }
      );
    }

    // Get dashboard statistics
    const [
      totalProperties,
      totalTenants,
      activeLeases,
      upcomingPayments,
    ] = await Promise.all([
      prisma.property.count({
        where: { organizationId: decoded.organizationId },
      }),
      prisma.tenant.count({
        where: { property: { organizationId: decoded.organizationId } },
      }),
      prisma.lease.count({
        where: {
          property: { organizationId: decoded.organizationId },
          status: 'ACTIVE',
        },
      }),
      prisma.payment.count({
        where: {
          lease: {
            property: { organizationId: decoded.organizationId },
          },
          dueDate: {
            gte: new Date(),
            lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Next 30 days
          },
          status: 'PENDING',
        },
      }),
    ]);

    return NextResponse.json({
      totalProperties,
      totalTenants,
      activeLeases,
      upcomingPayments,
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    if (error instanceof Error && error.name === 'JsonWebTokenError') {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}