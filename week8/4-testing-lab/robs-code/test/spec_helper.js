process.env.NODE_ENV = 'test'; // puts our API into test mode

global.Promise = require('bluebird');

const chai = require('chai'); // chai is an assertion library
global.should = chai.should();
global.expect = chai.expect;

const supertest = require('supertest'); // supertest allows us to test HTTP requests
const app = require('../index');

global.api = supertest(app); // `api` is now our virtual API for testing
