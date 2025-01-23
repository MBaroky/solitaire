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
  const tags = url.searchParams.get('tags');


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
      (<str>$propertyType = '' OR .propertyType.name = <str>$propertyType) AND
      (<str>$developer = '' OR .developer.name = <str>$developer) AND
      (<int16>$bedrooms = 0 OR .bedrooms = <int16>$bedrooms) AND
      (<int16>$bathrooms = 0 OR .bathrooms = <int16>$bathrooms) AND
      (<int32>$size = 0 OR .size = <int32>$size) AND
      (<str>$location = '' OR .propertyArea.name = <str>$location)
      AND (

        <str>$tags = '' OR .tags.name = <str>$tags
      )
    );`, {
    propertyType: propertyType || '',
    developer: developer || '',
    bedrooms: bedrooms ? parseInt(bedrooms) : 0,
    bathrooms: bathrooms ? parseInt(bathrooms) : 0,
    size: size ? parseInt(size) : 0,
    location: location || '',
    tags: tags || ''
  });

  // <str>$tags = '' OR .tags.name = <str>$tags

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

