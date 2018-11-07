const mongoose = require('mongoose');

const dessertSchema = mongoose.Schema({
  name: String,
  countryOfOrigin: String,
  imageUrl: String
});

const dessertModel = mongoose.model('Dessert', dessertSchema);
module.exports = dessertModel;
