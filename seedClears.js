// seed.js
const { createClient } = require('edgedb');
const client = createClient();

const clearDatabaseQuery = 'DELETE properties::SingleProperty;';

const clearDatabaseQuery1 = 'DELETE properties::PropertyType;';
const clearDatabaseQuery2 = 'DELETE properties::developer;';
const clearDatabaseQuery3 = 'DELETE properties::PropertyArea;';
const clearDatabaseQuery4 = 'DELETE properties::tag;';
const clearDatabaseQuery5 = 'DELETE properties::Project;';

module.exports =  async function clearData() {


  try {
    console.log('Clearing database...');
    await client.execute(clearDatabaseQuery);
    await client.execute(clearDatabaseQuery5); //project
    await client.execute(clearDatabaseQuery1);
    await client.execute(clearDatabaseQuery2);
    await client.execute(clearDatabaseQuery3);
    await client.execute(clearDatabaseQuery4);
    await client.execute( 'DELETE Session;');
    await client.execute( 'DELETE User;');
    console.log('Database cleared.');

  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}
