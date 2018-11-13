// backend
const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Dessert = require('../models/dessert');
const User = require('../models/user');

const userIds = ['5bea7fbd8df5bf7b16ada180', '5bea7fbd8df5bf7b16ada181', '5bea7fbd8df5bf7b16ada182'];

const userData = [
  {
    _id: userIds[0],
    username: 'Gordon Ramsay',
    email: 'gramsay@lambsauce.com',
    password: 'pass'
  },
  {
    _id: userIds[1],
    username: 'Mary Berry',
    email: 'mazza@soggybottom.com',
    password: 'pass'
  },
  {
    _id: userIds[2],
    username: 'Paul Hollywood',
    email: 'hollywood.handshake@aol.com',
    password: 'pass'
  }
];

const dessertData = [
  {
    createdBy: userIds[2],
    name: 'Tiramisu',
    countryOfOrigin: 'Italy',
    imageUrl: 'https://i.pinimg.com/564x/5d/97/14/5d9714236743e640f1e8f33716afde1e.jpg'
  },
  {
    createdBy: userIds[0],
    name: 'Snow Egg',
    countryOfOrigin: 'Australia',
    imageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2013/08/28/8166/0910-snow-egg-628.jpg'
  },
  {
    createdBy: userIds[1],
    name: 'Pavlova',
    countryOfOrigin: 'Australia',
    imageUrl: 'https://i.pinimg.com/564x/fc/3a/19/fc3a19a496594811cd3daf0a4d31d341.jpg'
  },
  {
    createdBy: userIds[0],
    name: 'Croquembouche',
    countryOfOrigin: 'France',
    imageUrl: 'https://i.pinimg.com/564x/fd/ea/d1/fdead13e256e66f07f8792267a2a083f.jpg'
  }
];
Dessert.collection.drop();
User.collection.drop();

Dessert.create(dessertData)
  .then(desserts => {
    console.log(`Created ${desserts.length} desserts`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} users`);
        mongoose.connection.close();
      });
  });
