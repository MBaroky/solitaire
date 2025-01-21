import { createClient } from 'edgedb';

const client = createClient();

export async function GET(req, res) {
  const url = new URL(req.url);
  const propertyType = url.searchParams.get('propertyType');
  const developer = url.searchParams.get('developer');
  const bedrooms = url.searchParams.get('bedrooms');
  const bathrooms = url.searchParams.get('bathrooms');
  const size = url.searchParams.get('size');
  const location = url.searchParams.get('location');

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
      tags:{name},
      buttons:{text, url},
    } filter (
      (<str>$propertyType = '' OR .propertyType.name = <str>$propertyType) and
      (<str>$developer = '' OR .developer.name = <str>$developer) and
      (<int16>$bedrooms = 0 OR .bedrooms = <int16>$bedrooms) and
      (<int16>$bathrooms = 0 OR .bathrooms = <int16>$bathrooms) and
      (<int32>$size = 0 OR .size = <int32>$size) and
      (<str>$location = '' OR .propertyArea.name = <str>$location)
    );`, {
    propertyType: propertyType || '',
    developer: developer || '',
    bedrooms: bedrooms ? parseInt(bedrooms) : 0,
    bathrooms: bathrooms ? parseInt(bathrooms) : 0,
    size: size ? parseInt(size) : 0,
    location: location || ''
  });

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// export async function GET_SIZES(req, res) {
//   const sizes = await client.query(`\
//     select distinct properties::SingleProperty.size;`);

//   return new Response(JSON.stringify(sizes), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// export async function GET_LOCATIONS(req, res) {
//   const locations = await client.query(`\
//     select distinct properties::SingleProperty.propertyArea.name;`);

//   return new Response(JSON.stringify(locations), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
