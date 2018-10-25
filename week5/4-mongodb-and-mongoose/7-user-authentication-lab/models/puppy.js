const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  colors: [String],
  img: String
});

const puppyModel = mongoose.model('Puppy', puppySchema);
module.exports = puppyModel;
