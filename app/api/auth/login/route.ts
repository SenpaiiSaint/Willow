import { NextResponse } from 'next/server';
import { signInSchema } from '@/lib/zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    console.log('Login attempt for:', body.email);
    
    // Validate input using shared schema
    const { email, password } = await signInSchema.parseAsync(body);

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        role: true,
        organization: true,
      },
    });

    if (!user) {
      console.log('User not found:', email);
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password || '');
    if (!isValidPassword) {
      console.log('Invalid password for user:', email);
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('User authenticated:', { id: user.id, email: user.email, role: user.role?.name });

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Generate JWT token
    const token = sign(
      {
        userId: user.id,
        email: user.email,
        organizationId: user.organizationId,
        role: user.role?.name,
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Create response with user data
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role?.name,
        organizationId: user.organizationId,
        organizationName: user.organization?.name,
      },
    });

    // Set token in cookie with development-friendly settings
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: false, // Changed to false for development to allow client-side access
      secure: false, // Changed to false for development
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    // Also set a non-httpOnly cookie for development debugging
    response.cookies.set({
      name: 'token_debug',
      value: token,
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    console.log('Login successful, cookies set for user:', email);
    return response;
  } catch (error) {
    console.error('Login error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 