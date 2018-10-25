const mongoose = require('mongoose');
const environment = require('../config/environment');
mongoose.connect(environment.dbUri);

const Puppy = require('../models/puppy');

Puppy.collection.drop();

const puppyData = [
  {
    name: 'Labrador',
    countryOfOrigin: 'Canada',
    colors: ['black', 'brown', 'cream'],
    img: 'https://i.pinimg.com/564x/cd/5d/59/cd5d5932ed6891534c8c0a825366828e.jpg'
  },
  {
    name: 'King Charles Spaniel',
    countryOfOrigin: 'United Kingdom',
    colors: ['brown', 'brown and black', 'brown and white', 'black, brown, and white'],
    img: 'https://i.pinimg.com/564x/9e/7f/5b/9e7f5bf20b826816d4404f52b8556e98.jpg'
  },
  {
    name: 'Dalmatian',
    countryOfOrigin: 'Croatia',
    colors: ['black and white', 'brown and white'],
    img: 'https://i.pinimg.com/564x/1a/45/33/1a45336052c28714d9363f2d34502d51.jpg'
  },
  {
    name: 'Border Collie',
    countryOfOrigin: 'United Kingdom',
    colors: ['black and white', 'brown and white', 'grey and white'],
    img: 'https://i.pinimg.com/564x/95/37/6e/95376ea928e0ae036dcebe11a1ee9ff7.jpg'
  }
];

Puppy
  .create(puppyData)
  .then(puppies => console.log(`Created ${puppies.length} puppies`))
  .catch(err => console.log(err))
  .then(() => mongoose.connection.close());
