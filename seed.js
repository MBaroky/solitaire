
// seed.js
const { createClient } = require('edgedb');
const { insertUserQuery } = require('./query');
const client = createClient();

async function seed() {
  const query = insertUserQuery();

  try {
    await client.execute(query);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
seed();
