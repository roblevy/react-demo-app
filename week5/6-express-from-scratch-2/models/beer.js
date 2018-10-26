const mongoose = require('mongoose');

const beerSchema = mongoose.Schema({
  name: String,
  price: Number
});

const beerModel = mongoose.model('Beer', beerSchema);

module.exports = beerModel;
