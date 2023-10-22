const fileService = require('../services/fileService');
const positionService = require('../services/positionService');

async function importAndAddPositions() {
    const filePath = './data/positions.json'; // Adjust the file path as needed
    try {
      const positions = await fileService.readPositionsFromFile(filePath);
      console.log('Positions read from file:', positions);
      await positionService.addPositionsToDatabase(positions);
      console.log('Positions imported and added to the database successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  }

importAndAddPositions();
