// seed.js
const clearData = require('./seedClears');
const seedProperties = require('./seedProperties');
const seedProjects = require('./seedProjects');
const seedDevelopers = require('./seedDevelopers');
const seedAreas = require('./seedAreas');

async function seed() {

  try {
    await clearData();
    await seedProperties();
    await seedProjects();
    await seedDevelopers();
    await seedAreas();
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  }
}
seed();
