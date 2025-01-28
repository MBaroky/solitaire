// pages/api/login.js
import { NextResponse } from 'next/server';
import { createClient } from 'edgedb';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { v4 as uuidv4 } from 'uuid';

const client = createClient();

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  try {
    // Fetch the user from EdgeDB
    const query = `
      SELECT User {
        id,
        email,
        password_hash
      }
      FILTER .email = <str>$email
    `;
    const user = await client.querySingle(query, { email });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password. <a href="/register">Register here</a>' }, { status: 401 });
    }

    // Compare the password hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Create a session token and store it in the database
    const sessionToken = uuidv4(); // Generate a real session token
    await client.execute(`
      INSERT Session {
        token := <str>$sessionToken,
        user := (SELECT User FILTER .id = <uuid>$userId)
      }
    `, { sessionToken, userId: user.id });

    // Set the session token as a cookie
    const cookie = serialize('session_token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    const response = NextResponse.json({ message: 'Login successful' });
    response.headers.set('Set-Cookie', cookie);
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}