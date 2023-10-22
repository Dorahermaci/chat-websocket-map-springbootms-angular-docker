const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  name:String,
  longitude: Number,
  latitude: Number,
});

const Position = mongoose.model('Position', positionSchema);

module.exports = Position;
