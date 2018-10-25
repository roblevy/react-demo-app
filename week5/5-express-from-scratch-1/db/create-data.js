const mongoose = require('mongoose');
const Bird = require('../models/bird');
const User = require('../models/user');
mongoose.connect('mongodb://localhost/birdface');

const birdData = [
  {
    user: '5bd230a897889c37190295ff',
    name: 'Wren',
    flightDistance: 10000
  }, {
    user: '5bd230a897889c37190295ff',
    name: 'Blackbird',
    flightDistance: 50000
  }
];

// Delete all the birds first
Bird.collection.drop();
User.collection.drop();

Bird.create(birdData)
  .then(birds => {
    console.log('This is birds', birds);
    console.log(`Created ${birds.length} birds`);
    return User.create({
      _id: '5bd230a897889c37190295ff',
      email: 'r@r',
      username: 'Rob'
    });
  })
  .then(user => {
    console.log(`Created ${user.length} users`);
    mongoose.connection.close();
  })
