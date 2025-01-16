import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const url = new URL(req.url);
  const propertyType = url.searchParams.get('propertyType');
  const developer = url.searchParams.get('developer');

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
    } filter (
      (<str>$propertyType = '' OR .propertyType.name = <str>$propertyType) and
      (<str>$developer = '' OR .developer.name = <str>$developer)
    );`, {
    propertyType: propertyType || '',
    developer: developer || ''
  });

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
