const mongoose = require('mongoose');

const cocktailSchema = mongoose.Schema({
  name: String,
  ingredients: [String], // Ingredients is an array of Strings
  image: String,
  price: Number
});

const cocktailModel = mongoose.model('Cocktail', cocktailSchema);

// Export the model for use elsewhere
// This is what will arrive when we say require('this file');
module.exports = cocktailModel;
