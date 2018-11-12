const mongoose = require('mongoose');

const fishSchema = mongoose.Schema({
  name: String,
  latinName: String,
  imageUrl: String,
  // Which user was a particular fish created by?
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

const fishModel = mongoose.model('Fish', fishSchema);
module.exports = fishModel;
