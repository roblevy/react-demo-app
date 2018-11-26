/* global api, expect, describe, it, beforeEach */

const Dessert = require('../../models/dessert');
const userIds = [
  '5bea7fbd8df5bf7b16ada180',
  '5bea7fbd8df5bf7b16ada181',
  '5bea7fbd8df5bf7b16ada182'
];

const dessertData = [
  {
    createdBy: userIds[0],
    name: 'Croquembouche',
    countryOfOrigin: 'France',
    imageUrl: 'https://i.pinimg.com/564x/fd/ea/d1/fdead13e256e66f07f8792267a2a083f.jpg'
  },
  {
    createdBy: userIds[1],
    name: 'Pavlova',
    countryOfOrigin: 'Australia',
    imageUrl: 'https://i.pinimg.com/564x/fc/3a/19/fc3a19a496594811cd3daf0a4d31d341.jpg'
  },
  {
    createdBy: userIds[0],
    name: 'Snow Egg',
    countryOfOrigin: 'Australia',
    imageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2013/08/28/8166/0910-snow-egg-628.jpg'
  },
  {
    createdBy: userIds[2],
    name: 'Tiramisu',
    countryOfOrigin: 'Italy',
    imageUrl: 'https://i.pinimg.com/564x/5d/97/14/5d9714236743e640f1e8f33716afde1e.jpg'
  }
];

describe('Desserts INDEX', () => {

  beforeEach(done => {
    Dessert.remove({})
      .then(() => Dessert.create(dessertData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/desserts')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/desserts')
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/desserts')
      .end((err, res) => {
        // use res.body.forEach
        res.body.forEach(item => expect(item).to.be.an('object'));
        done();
      });
  });

  it('should return the correct data', done => {
    api.get('/api/desserts')
      .end((err, res) => {
        res.body.forEach(dessert => {
          // The INDEX route is quite tricky to test, because Mongo doesn't
          // create the desserts in any particular order! We have to find
          // the right dessert in dessertData to compare against each
          // element of the response from the INDEX route.
          const dataItem = dessertData.find(item => item.name === dessert.name);
          expect(dessert.name).to.eq(dataItem.name);
          expect(dessert.countryOfOrigin).to.eq(dataItem.countryOfOrigin);
          expect(dessert.imageUrl).to.eq(dataItem.imageUrl);
        });
        done();
      });
  });

});