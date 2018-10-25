const mongoose = require('mongoose');
const Bird = require('../models/bird');
mongoose.connect('mongodb://localhost/birdface');

const birdData = [
  {
    name: 'Wren',
    flightDistance: 10000
  }, {
    name: 'Blackbird',
    flightDistance: 50000
  }
];

// Delete all the birds first
Bird.collection.drop();

Bird.create(birdData)
  .then(birds => {
    console.log('This is birds', birds);
    console.log(`Created ${birds.length} birds`);
    mongoose.connection.close();
  });
