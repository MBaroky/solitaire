// seed.js
const clearData = require('./seedClears');
const seedProperties = require('./seedProperties');
const seedProjects = require('./seedProjects');
const seedDevelopers = require('./seedDevelopers');

async function seed() {

  try {
    await clearData();
    await seedProperties();
    await seedProjects();
    await seedDevelopers();
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  }
}
seed();
