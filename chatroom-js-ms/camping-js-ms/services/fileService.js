const fs = require('fs').promises;

async function readPositionsFromFile(filePath) {
  try {
    const fileData = await fs.readFile(filePath, 'utf8');
    const positions = JSON.parse(fileData); // Assuming the file contains JSON data
    return positions;
  } catch (error) {
    throw new Error('Error reading positions from the file.');
  }
}

module.exports = {
  readPositionsFromFile,
};
