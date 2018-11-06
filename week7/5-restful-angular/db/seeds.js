const mongoose = require('mongoose');
const env = require('../config/environment');
const Fish = require('../models/fish');
mongoose.connect(env.dbUri);

const fishData = [
  {
    name: 'Cod',
    latinName: 'Codus Fishiae',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Blue_walleye.jpg'
  },
  {
    name: 'Herring',
    latinName: 'Herringa Ferosciae',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Clupea_harengus_Gervais.flipped.jpg'
  }
];
Fish.collection.drop();

Fish.create(fishData)
  .then(fishes => {
    console.log(`Created ${fishes.length} fishes`);
    mongoose.connection.close();
  });
