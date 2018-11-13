/* global api, expect, describe, it, beforeEach */

const Dessert = require('../../models/dessert');

const userIds = [
  '5bea7fbd8df5bf7b16ada180',
  '5bea7fbd8df5bf7b16ada181',
  '5bea7fbd8df5bf7b16ada182'
];

const dessertData = {
  createdBy: userIds[2],
  name: 'Tiramisu',
  countryOfOrigin: 'Italy',
  imageUrl: 'https://i.pinimg.com/564x/5d/97/14/5d9714236743e640f1e8f33716afde1e.jpg'
};

let dessertId;

describe('Desserts SHOW', () => {

  beforeEach(done => {
    Dessert.remove({})
      .then(() => Dessert.create(dessertData))
      .then(dessert => {
        dessertId = dessert._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/desserts/${dessertId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/desserts/${dessertId}`)
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/desserts/${dessertId}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(dessertData.name);
        expect(res.body.imageUrl).to.eq(dessertData.imageUrl);
        expect(res.body.countryOfOrigin).to.eq(dessertData.countryOfOrigin);
        done();
      });
  });

});
