const mongoose = require('mongoose');
const env = require('../config/environment');
const Dessert = require('../models/dessert');
mongoose.connect(env.dbUri);

const dessertData = [
  {
    name: 'Tiramisu',
    countryOfOrigin: 'Italy',
    imageUrl: 'https://i.pinimg.com/564x/5d/97/14/5d9714236743e640f1e8f33716afde1e.jpg'
  },
  {
    name: 'Snow Egg',
    countryOfOrigin: 'Australia',
    imageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2013/08/28/8166/0910-snow-egg-628.jpg'
  },
  {
    name: 'Pavlova',
    countryOfOrigin: 'Australia',
    imageUrl: 'https://i.pinimg.com/564x/fc/3a/19/fc3a19a496594811cd3daf0a4d31d341.jpg'
  },
  {
    name: 'Croquembouche',
    countryOfOrigin: 'France',
    imageUrl: 'https://i.pinimg.com/564x/fd/ea/d1/fdead13e256e66f07f8792267a2a083f.jpg'
  }
];
Dessert.collection.drop();

Dessert.create(dessertData)
  .then(desserts => {
    console.log(`Created ${desserts.length} desserts`);
    mongoose.connection.close();
  });
