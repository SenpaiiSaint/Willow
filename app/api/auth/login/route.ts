import { NextResponse } from 'next/server';
import { signInSchema } from '@/lib/zod';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    let body;
    try {
      body = await req.json();
    } catch (jsonError) {
      console.error('Invalid JSON in request body:', jsonError);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    let email, password;
    try {
      ({ email, password } = await signInSchema.parseAsync(body));
    } catch (zodError) {
      console.error('Validation error:', zodError);
      return NextResponse.json(
        { error: 'Invalid input data', details: zodError instanceof z.ZodError ? zodError.errors : undefined },
        { status: 400 }
      );
    }

    // Find user in database
    let user;
    try {
      user = await prisma.user.findUnique({
        where: { email },
        include: { role: true, organization: true },
      });
    } catch (dbError) {
      console.error('Database error during user lookup:', dbError);
      return NextResponse.json({ error: 'Database error', details: dbError instanceof Error ? dbError.message : dbError }, { status: 500 });
    }

    if (!user) {
      console.log('User not found:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Verify password
    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, user.password || '');
    } catch (bcryptError) {
      console.error('Bcrypt error:', bcryptError);
      return NextResponse.json({ error: 'Password verification failed' }, { status: 500 });
    }
    if (!isValidPassword) {
      console.log('Invalid password for user:', email);
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Update last login (non-fatal if fails)
    prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    }).catch((updateError: unknown) => {
      console.error('Database error during lastLogin update:', updateError);
    });

    // Generate JWT token
    let token;
    try {
      token = sign(
        {
          userId: user.id,
          email: user.email,
          organizationId: user.organizationId,
          role: user.role?.name,
        },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );
    } catch (jwtError) {
      console.error('JWT signing error:', jwtError);
      return NextResponse.json({ error: 'Token generation failed' }, { status: 500 });
    }

    // Prepare response
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

    // Set cookies (non-fatal if fails)
    try {
      response.cookies.set({
        name: 'token',
        value: token,
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60,
        path: '/',
      });
      response.cookies.set({
        name: 'token_debug',
        value: token,
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60,
        path: '/',
      });
    } catch (cookieError) {
      console.error('Cookie set error:', cookieError);
    }

    console.log('Login successful, cookies set for user:', email);
    return response;
  } catch (error) {
    // Catch-all for unexpected errors
    console.error('Unexpected login error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 