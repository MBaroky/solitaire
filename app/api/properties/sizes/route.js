import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const sizes = await client.query(`\
    select distinct properties::SingleProperty.size;`);

  return new Response(JSON.stringify(sizes), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
