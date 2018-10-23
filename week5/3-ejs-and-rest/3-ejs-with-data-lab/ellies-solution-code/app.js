const express = require('express');
const app = express();

const puppiesObject = require('./db/data');

const port = 4000;
app.use(express.static('public'));

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('pages/home', {});
});

app.get('/about', function(req, res) {
  res.render('pages/about', {});
});

app.get('/puppies', function(req, res) {
  res.render('puppies/index', puppiesObject);
});

app.get('/puppies/:id', function(req, res) {
  const puppy = puppiesObject.puppies.filter(puppy => puppy.id === parseInt(req.params.id))[0];
  console.log('The puppy is', puppy);
  res.render('puppies/show', {puppy});
});


app.listen(port, () => console.log(`Listening for changes on port ${port}`));
