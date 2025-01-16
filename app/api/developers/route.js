
import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const developers = await client.query(`\
    select properties::developer {
      id,
      name
    };`);

  return new Response(JSON.stringify(developers), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}