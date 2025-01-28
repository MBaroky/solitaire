import { NextResponse } from 'next/server';
import { createClient } from 'edgedb';
import bcrypt from 'bcrypt';

const client = createClient();

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  try {
    // Check if the email is already registered
    const existingUser = await client.querySingle(`
      SELECT User {
        email
      }
      FILTER .email = <str>$email
    `, { email });

    if (existingUser) {
      return NextResponse.json({ message: 'Email is already registered' }, { status: 400 });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert the user into EdgeDB
    const query = `
      INSERT User {
        email := <str>$email,
        password_hash := <str>$password_hash
      }
    `;
    await client.query(query, { email, password_hash: passwordHash });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}