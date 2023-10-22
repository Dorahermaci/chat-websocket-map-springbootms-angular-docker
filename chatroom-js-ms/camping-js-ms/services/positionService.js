// positionService.js

const Position = require('../models/Position'); // Import your Mongoose model

async function getPositions() {
  try {
    const positions = await Position.find();
    return positions;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des positions.');
  }
}

async function addPositionsToDatabase(positions) {
  try {
    await Position.save(
      { name: 'Position 1', latitude: 40.7128, longitude: -74.006 });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getPositions,
  addPositionsToDatabase
};
