
// seed.js
const { createClient } = require('edgedb');
const { insertPropertyQuery } = require('./app/queries/insertPropertyQuery');
const client = createClient();

async function seed() {
  const query = insertPropertyQuery(
    'Rent', // lease = 'Rent'
    "Apartment", // type
    '7,500,000', // price
    'Expansive villas with golf course views, landscaped gardens, and luxurious interiors.', // excerpt
    "Emirates Hills, Dubai", // area
    '2500', // size
    "sodic", // developer
    true, // featured
    '8', // bedrooms,
    '3', // bathrooms,
    ['', '', ''], // urls ['Book  A Viewing', 'Call', 'Message']
    ['1-01.webp', '1-02.webp', '1-03.webp']// images
  );
  const query1 = insertPropertyQuery(
    'Rent',
    "Villa",
    '35,000,000',
    `Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline.`,
    "Palm Jumeirah, Dubai",
    '15,000',
    "sodic",
    true,
    '15',
    '5',
    ['', '', ''],
    ['2-01.webp', '2-02.webp', '2-03.webp']
  );
  const query2 = insertPropertyQuery(
    'Rent',
    "Villa",
    '25,000,000',
    `Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline.`,
    "Palm Jumeirah, Dubai",
    '8,500',
    "sodic",
    true,
    '8',
    '3',
    ['', '', ''],
    ['3-01.webp', '3-02.webp', '3-03.webp']
  );

  try {
    await client.execute(query);
    await client.execute(query1);
    await client.execute(query2);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
seed();
