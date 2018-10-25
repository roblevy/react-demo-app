const mongoose = require('mongoose');

const birdSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: String,
  flightDistance: Number
});

const birdModel = mongoose.model('Bird', birdSchema);

module.exports = birdModel;
