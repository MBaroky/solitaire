// pages/api/logout.js
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  // Clear the session cookie
  const response = NextResponse.json({ message: 'Logout successful' });
  response.headers.set(
    'Set-Cookie',
    serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: -1, // Expire the cookie immediately
      path: '/',
    })
  );

  return response;
}