/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// TODO: add secret to environment file
const { secret } = require('../../config/environment');

const Dessert = require('../../models/dessert');
const userIds = [
  // userIds go here from seeds
];
const dessertData = [
  // get this from seeds
];

let token;

describe('Desserts CREATE', () => {

  beforeEach(done => {
    Dessert.remove({})
      .then(() => User.remove({}))
      .then(() => Dessert.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.post('/api/desserts')
      .end((err, res) => {
        expect(true).to.eq(false);
        done();
      });
  });

  it('should return a 201 response', done => {
    api.post('/api/desserts')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(true).to.eq(false);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/desserts')
      .set('Authorization', `Bearer ${token}`)
      .send(dessertData)
      .end((err, res) => {
        // test the type of res.body
        expect(true).to.eq(false);
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/desserts')
      .set('Authorization', `Bearer ${token}`)
      .send(dessertData)
      .end((err, res) => {
        // test the contents of res.body against the test data
        expect(true).to.eq(false);
        done();
      });
  });
});
