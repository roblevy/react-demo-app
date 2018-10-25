const express = require('express');
const app = express();
const port = 4000;

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the view engine of Express
const expressEjsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs'); // Express knows that views are written in ejs
app.use(expressEjsLayouts);

// Method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set up mongoose and the model
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/birdface');
const Bird = require('./models/bird');
const User = require('./models/user');

app.get('/', function(req, res) {
  res.render('home');
});

// INDEX route
app.get('/birds', function(req, res) {
  // Find every bird in the database
  Bird.find().then(birds => {
    console.log('Some birds have been found', birds);
    res.render('birds/index', {
      birds: birds
    });
  });
});

// NEW route
// Must be above the SHOW route
app.get('/birds/new', function(req, res) {
  res.render('birds/new');
});

// SHOW route
app.get('/birds/:birdId', function(req, res) {
  // Use req.params.birdId to look up a bird in the database
  Bird.findById(req.params.birdId)
    .then(bird => {
      res.render('birds/show', bird);
    });
});

app.get('/users', function(req, res) {
  User.find().populate('birdsCreated')
    .then(users => res.render('users', { users }));
})

// CREATE route
app.post('/birds', function(req, res) {
  // Form data is stored on req.body
  Bird.create(req.body)
    .then(bird => {
      console.log('Created a bird', bird);
      res.redirect('/birds');
    });
});

// EDIT route
app.get('/birds/:birdId/edit', function(req, res) {
  // Find the bird in the database and render the edit form
  Bird.findById(req.params.birdId)
    .then(bird => res.render('birds/edit', bird));
});

// UPDATE route
app.put('/birds/:birdId', function(req, res) {
  console.log('Updating a bird', req.params.birdId, req.body);
  Bird.findByIdAndUpdate(req.params.birdId, req.body)
    .then(() => res.redirect('/birds'));
});

// DELETE route
app.delete('/birds/:birdId', function(req, res) {
  Bird.findByIdAndDelete(req.params.birdId)
    .then(res.redirect('/birds'));
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
