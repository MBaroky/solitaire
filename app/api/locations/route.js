
import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const locations = await client.query(`\
    SELECT properties::PropertyArea {
      name,
      image
    };`);

  return new Response(JSON.stringify(locations), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}