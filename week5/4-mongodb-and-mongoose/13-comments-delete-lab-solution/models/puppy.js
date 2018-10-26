const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  colors: [String],
  img: String,
  comments: [{
    rating: { type: Number, min: 1, max: 10 },
    user: { type: String, required: true },
    content: { type: String }
  }]
});

const puppyModel = mongoose.model('Puppy', puppySchema);
module.exports = puppyModel;
