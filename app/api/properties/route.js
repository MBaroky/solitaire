import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const url = new URL(req.url);
  const propertyType = url.searchParams.get('propertyType');
  const developer = url.searchParams.get('developer');
  const bedrooms = url.searchParams.get('bedrooms');
  const bathrooms = url.searchParams.get('bathrooms');

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
      (<str>$developer = '' OR .developer.name = <str>$developer) and
      (<int16>$bedrooms = 0 OR .bedrooms = <int16>$bedrooms) and
      (<int16>$bathrooms = 0 OR .bathrooms = <int16>$bathrooms)
    );`, {
    propertyType: propertyType || '',
    developer: developer || '',
    bedrooms: bedrooms ? parseInt(bedrooms) : 0,
    bathrooms: bathrooms ? parseInt(bathrooms) : 0
  });

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
