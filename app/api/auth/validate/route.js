import { NextResponse } from 'next/server';
import { createClient } from 'edgedb';

const client = createClient();

export async function POST(req) {
  const { sessionToken } = await req.json();

  if (!sessionToken) {
    return NextResponse.json({ message: 'Session token is required' }, { status: 400 });
  }

  try {
    const session = await client.querySingle(`
      SELECT Session {
        id,
        user: {
          id,
          email
        }
      }
      FILTER .token = <str>$sessionToken
    `, { sessionToken });

    if (!session) {
      return NextResponse.json({ message: 'Invalid session token' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Session valid', user: session.user }, { status: 200 });
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
