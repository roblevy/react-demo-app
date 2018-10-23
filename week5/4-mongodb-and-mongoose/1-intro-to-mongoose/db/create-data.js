const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happy-hour');
// Out of the db folder, into models and find cocktail.js
const Cocktail = require('../models/cocktail');

const newCocktail = {
  name: 'Singapore Sling',
  ingredients: [
    'Gin', 'Cointreau', 'Pineapple Juice'
  ],
  price: 7.5
};
Cocktail.create(newCocktail);
