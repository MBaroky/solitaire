// seed.js
const { createClient } = require('edgedb');
const {insertDeveloperQuery} = require('./app/queries/insertDeveloperQuery');
const client = createClient();

module.exports = async function seedProjects() {

  const query = insertDeveloperQuery(
    'damac', //name
    'damac-cover.webp', //cover
    'damac-logo.webp', //logo
    'Specializes in high-end properties, including branded residences with...' //excerpt
  );
  const query1 = insertDeveloperQuery(
    'azizi developments', //name
    'azizi-cover.webp', //cover
    'azizi-logo.webp', //logo
    'Offers a range of residential projects, especially in Al Furjan and Meydan...' //excerpt
  );
  const query2 = insertDeveloperQuery(
    'eemar', //name
    'emaar-cover.webp', //cover
    'emaar-logo.webp', //logo
    'One of the pioneer real estate developers in Dubai, Emaar Properties...' //excerpt
  );
  const query3 = insertDeveloperQuery(
    'meraas', //name
    'meraas-cover.webp', //cover
    'meraas-logo.webp', //logo
    'Focuses on lifestyle destinations and urban developments, including...' //excerpt
  );
  const query4 = insertDeveloperQuery(
    'nakheel', //name
    'nakheel-cover.webp', //cover
    'nakheel-logo.webp', //logo
    'Nakheel Properties is a globally acclaimed  developer dedicated to...' //excerpt
  );
  const query5 = insertDeveloperQuery(
    'sobha realty', //name
    'sobha-cover.webp', //cover
    'sobha-logo.webp' , //logo
    'Renowned for high-quality craftsmanship, Sobha develops...' //excerpt
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
