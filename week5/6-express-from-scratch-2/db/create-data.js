const mongoose = require('mongoose');
const Beer = require('../models/beer');

mongoose.connect('mongodb://localhost/de-beers');

const beerData = [
  {
    name: 'Heineken',
    price: 3
  },
  {
    name: 'Pacifico',
    price: 6
  }
];

// Delete any existing beers
Beer.collection.drop();

Beer.create(beerData)
  .then(beers => {
    console.log(`Created ${beers.length} beers`);
    mongoose.connection.close();
  });
