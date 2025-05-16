import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';
import { auth } from './auth';

export async function middleware(request: NextRequest) {
  // Check for JWT token in cookie
  const token = request.cookies.get('token')?.value;
  
  if (token) {
    try {
      // Verify JWT token
      const decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key');
      return NextResponse.next();
    } catch (error) {
      // Token invalid, try NextAuth session
      const session = await auth();
      if (!session) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  } else {
    // No token, try NextAuth session
    const session = await auth();
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/properties/:path*',
    '/tenants/:path*',
    '/users/:path*',
  ],
};
  