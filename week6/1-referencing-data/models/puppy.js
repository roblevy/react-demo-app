const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  colors: [String],
  img: String,
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [{
    rating: { type: Number, min: 1, max: 10 },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    content: { type: String }
  }]
});

const puppyModel = mongoose.model('Puppy', puppySchema);
module.exports = puppyModel;
