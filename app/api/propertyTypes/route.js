import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const propertyTypes = await client.query(`\
    select properties::PropertyType {
      id,
      name
    };`);

  return new Response(JSON.stringify(propertyTypes), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
