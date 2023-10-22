// positionsRoute.js

const express = require('express');
const router = express.Router();
const positionService = require('../services/positionService'); // Import your service

router.get('/', async (req, res) => {
  try {
    const positions = await positionService.getPositions();
    res.json(positions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des positions.' });
  }
});

module.exports = router;
