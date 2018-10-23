const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/happy-hour');

// Out of the db folder, into models and find cocktail.js
const Cocktail = require('../models/cocktail');

function findIsDone(result) {
  console.log('Find has finished!');
  console.log('The result of find was', result);
}

Cocktail.find().then(findIsDone);
console.log('Cocktails not found (yet)');
