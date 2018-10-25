const mongoose = require('mongoose');

const birdSchema = mongoose.Schema({
  name: String,
  flightDistance: Number
});

const birdModel = mongoose.model('Bird', birdSchema);

module.exports = birdModel;
