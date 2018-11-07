const mongoose = require('mongoose');

const fishSchema = mongoose.Schema({
  name: String,
  latinName: String,
  imageUrl: String
});

const fishModel = mongoose.model('Fish', fishSchema);
module.exports = fishModel;
