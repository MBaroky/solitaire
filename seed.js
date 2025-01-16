// seed.js
const { createClient } = require('edgedb');
const { insertPropertyQuery } = require('./app/queries/insertPropertyQuery');
const client = createClient();

const clearDatabaseQuery = 'DELETE properties::SingleProperty;';

const clearDatabaseQuery1 = 'DELETE properties::PropertyType;';
const clearDatabaseQuery2 = 'DELETE properties::developer;';
const clearDatabaseQuery3 = 'DELETE properties::PropertyArea;';

async function seed() {
  const query = insertPropertyQuery(
    'Rent', // lease = 'Rent'
    "Apartment", // type
    '7,500,000', // price
    'Expansive villas with golf course views, landscaped gardens, and luxurious interiors.', // excerpt
    "Emirates Hills, Dubai", // area
    '2500', // size
    "damac", // developer
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
    "eemar",
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
    "nakheel",
    true,
    '8',
    '3',
    ['', '', ''],
    ['3-01.webp', '3-02.webp', '3-03.webp']
  );

  const query3 = insertPropertyQuery(
    'Buy',
    "Villa",
    '25,000,000',
    `Ultra-luxury waterfront villas with private beach access and panoramic views of the skyline.`,
    "Palm Jumeirah, Dubai",
    '8,500',
    "eemar",
    true,
    '8',
    '3',
    ['', '', ''],
    ['3-01.webp', '3-02.webp', '3-03.webp']
  );

  const query4 = insertPropertyQuery(
    'Buy',
    "Apartment",
    '6,000,000',
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nulla ea. Dolores molestiae praesentium enim, ad veritatis minima officiis, voluptatibus, nobis magnam minus saepe ullam quam? Et atque vitae repellendus.`,
    "Khalifa rd. Abu Dhabi",
    '4000',
    "Sobha Realty ",
    true,
    '4',
    '1',
    ['', '', ''],
    ['4-01.jpg', '4-02.jpg', '4-03.jpg']
  );

  try {
    console.log('Clearing database...');
    await client.execute(clearDatabaseQuery);
    await client.execute(clearDatabaseQuery1);
    await client.execute(clearDatabaseQuery2);
    await client.execute(clearDatabaseQuery3);
    console.log('Database cleared.');
    await client.execute(query);
    await client.execute(query1);
    await client.execute(query2);
    await client.execute(query3);
    await client.execute(query4);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
seed();
