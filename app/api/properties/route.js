import { createClient } from 'edgedb';

const client = createClient();
const items = await client.query(`\
  select properties::SingleProperty {
  id,
    price,
    propertyType: {name},
    lease,
    propertyArea:{name},
    developer:{name},
    size,
    excerpt,
    featured,
    bedrooms,
    bathrooms,
    images,

    buttons:{text, url},
 };`);

export async function GET(req, res) {
  return new Response(JSON.stringify(items), {
    status: 200,
    // headers: { 'Set-Cookie': `token=${token.value}` },
  });
}
