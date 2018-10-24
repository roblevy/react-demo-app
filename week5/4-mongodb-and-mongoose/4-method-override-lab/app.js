const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ejs-puppers');
const Puppy = require('./models/puppy');

const puppiesObject = require('./db/data');

const port = 4000;
app.use(express.static('public'));

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('*', function(req, res, next) {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.render('pages/home', {});
});

app.get('/about', function(req, res) {
  res.render('pages/about', {});
});

app.get('/puppies', function(req, res) {
  Puppy
    .find()
    .then(function(result) {
      const puppyObject = {
        puppies: result
      };
      res.render('puppies/index', puppyObject);
    });
});

app.get('/puppies/new', function(req, res) {
  res.render('puppies/new');
});

app.post('/puppies', function(req, res) {
  console.log('The req is', req.body);
  req.body.id = Math.floor(Math.random() * 100);
  puppiesObject.puppies.push(req.body);
  res.redirect('/puppies');
});

app.get('/puppies/:id', function(req, res) {
  Puppy
    .findById(req.params.id)
    .then(function(puppy) {
      res.render('puppies/show', {puppy});
    });
});



app.listen(port, () => console.log(`Listening for changes on port ${port}`));
