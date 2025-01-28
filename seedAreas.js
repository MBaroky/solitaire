// seed.js
const { createClient } = require('edgedb');
const {insertAreaQuery} = require('./app/queries/insertAreaQuery');
const client = createClient();

module.exports = async function seedProjects() {

  const query = insertAreaQuery(
    'damac', //name
    'damac-cover.webp', //cover
  );
  try {
    await client.execute(query);
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
