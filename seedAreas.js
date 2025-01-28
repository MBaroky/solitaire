// seed.js
const { createClient } = require('edgedb');
const {insertAreaQuery} = require('./app/queries/insertAreaQuery');
const client = createClient();

module.exports = async function seedProjects() {

  const query = insertAreaQuery(
    'bluewater bay, dubai', //name
    'Bluewaters Island.webp', //cover
  );
  const query1 = insertAreaQuery(
    'dubai marina, dubai', //name
    'Dubai Marina.webp', //cover
  );
  const query2 = insertAreaQuery(
    'jumeirah golf estates, dubai', //name
    'Jumeirah Lake Towers (JLT).webp', //cover
  );
  const query3 = insertAreaQuery(
    'palm jumeirah, dubai', //name
    'Palm Jumeirah.webp', //cover
  );
  const query4 = insertAreaQuery(
    'Business Bay', //name
    'Business Bay.webp', //cover
  );
  const query5 = insertAreaQuery(
    'Downtown Dubai', //name
    'Downtown Dubai.webp', //cover
  );
  const query6 = insertAreaQuery(
    'Dubai Creek Harbour', //name
    'Dubai Creek Harbour.webp', //cover
  );
  const query7 = insertAreaQuery(
    'EMAAR Beachfront', //name
    'EMAAR Beachfront.webp', //cover
  );
  const query8 = insertAreaQuery(
    'Sobha Hartland', //name
    'Sobha Hartland.webp', //cover
  );
  try {
    await client.execute(query);
    await client.execute(query1);
    await client.execute(query2);
    await client.execute(query3);
    await client.execute(query4);
    await client.execute(query5);
    await client.execute(query6);
    await client.execute(query7);
    await client.execute(query8);
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
