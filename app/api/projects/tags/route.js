import { NextResponse } from 'next/server';
import { createClient } from 'edgedb';

const client = createClient();

export async function GET() {
  try {
    const query = `
      SELECT properties::tag {
        id,
        name
      }
    `;
    const tags = await client.query(query);
    return NextResponse.json(tags);
  } catch (error) {
    return NextResponse.error();
  }
}
