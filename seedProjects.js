// seed.js
const { createClient } = require('edgedb');
const { insertProjectQuery } = require('./app/queries/insertProjectQuery');
const client = createClient();

module.exports = async function seedProjects() {

  const query = insertProjectQuery(
    "Apartment", //type
    '35,000,000', //price
    `Nakheel Properties presents a new phase at Palm Jebel Ali, offering luxurious villa...`, //excerpt
    "Palm Jumeirah, Dubai", //area
    '15,000', //size
    "sodic ", //developer
    true, //featured
    '6', //bedrooms
    '5', //bathrooms
    ['', ''], //urls
    ['1-01.webp'],  //images
    ['Skyline View', 'Smart Home',  'High-Rise Living'], //tags
    2027, //date
    'Beach Mansions Frond C at Palm Jebel Ali' //title
  );
  const query1 = insertProjectQuery(
    "villa", //type
    '20,000,000', //price
    `Bluewater Bay offers an unparalleled waterfront lifestyle, blending modern...`, //excerpt
    "Bluewater Bay, Dubai", //area
    '12,000', //size
    "sodic ", //developer
    true, //featured
    '5', //bedrooms
    '4', //bathrooms
    ['', ''], //urls
    ['2-01.webp'],  //images
    ['Beachfront', 'Close to Metro',  'Waterfront', 'Green Spaces'], //tags
    2027, //date
    'Oceanfront Residences at Bluewater Bay' //title
  );
  const query2 = insertProjectQuery(
    "villa", //type
    '32,000,000', //price
    `Emirates Hills unveils the Skyline Villas, where luxury meets exclusivity. Each...`, //excerpt
    "Emirates Hills, Dubai", //area
    '20,000', //size
    "sodic ", //developer
    true, //featured
    '6', //bedrooms
    '5', //bathrooms
    ['', ''], //urls
    ['3-01.webp'],  //images
    ['Beachfront', 'Close to Metro',  'Waterfront', 'Green Spaces'], //tags
    2028, //date
    'Skyline Villas at Emirates Hills' //title
  );
  const query3 = insertProjectQuery(
    "villa", //type
    '10,000,000', //price
    `The Sunset Villas provide a family-friendly community atmosphere within...`, //excerpt
    "Arabian Ranches III, Dubai", //area
    '10,000', //size
    "sodic ", //developer
    true, //featured
    '4', //bedrooms
    '3', //bathrooms
    ['', ''], //urls
    ['4-01.webp'],  //images
    [ 'Family-Friendly', 'Green Spaces'], //tags
    2025, //date
    'Sunset Villas at Arabian Ranches III' //title
  );
  const query4 = insertProjectQuery(
    "apartment", //type
    '33,000,000', //price
    `Garden Estates offers a blend of luxury and nature, nestled within the lush...`, //excerpt
    "Jumeirah Golf Estates, Dubai", //area
    '15,000', //size
    "sodic ", //developer
    true, //featured
    '6', //bedrooms
    '5', //bathrooms
    ['', ''], //urls
    ['5-01.webp'],  //images
    [ 'Gated Community', 'Green Spaces', 'Urban Living'], //tags
    2026, //date
    'Garden Estates at Jumeirah Golf Estates' //title
  );
  const query5 = insertProjectQuery(
    "apartment", //type
    '50,000,000', //price
    `Dubai Marina’s Marina Towers bring contemporary urban living to the heart...`, //excerpt
    "Dubai Marina, Dubai", //area
    '8,000', //size
    "sodic ", //developer
    true, //featured
    '5', //bedrooms
    '4', //bathrooms
    ['', ''], //urls
    ['6-01.webp'],  //images
    [ 'Gated Community', 'Green Spaces', 'Urban Living'], //tags
    2025, //date
    'Marina Towers at Dubai Marina' //title
  );
  try {
    await client.execute(query);
    await client.execute(query1);
    await client.execute(query2);
    await client.execute(query3);
    await client.execute(query4);
    await client.execute(query5);
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
