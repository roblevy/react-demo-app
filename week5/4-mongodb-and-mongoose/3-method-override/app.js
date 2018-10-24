const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Cocktail = require('./models/cocktail');


mongoose.connect('mongodb://localhost/happy-hour');
const app = express();

// Use method override to change HTML form POST requests
// into other types of request like PUT
app.use(methodOverride('_method'));

// We need this to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 4000;
const cocktailObject = require('./db/data');

// Send static files like .js .css .png etc
// from the public folder:
app.use(express.static('public'));

// Render the layout.ejs file when the user requests the home page
app.get('/', function(req, res) {
  // EJS files in a 'views' folder are the default:
  res.render('home'); // An empty object = no data
});

// Load the about page
app.get('/about', function(req, res) {
  res.render('about');
});

// INDEX Route
app.get('/cocktails', function(req, res) {
  // Find all the cocktails, then render an ejs file:
  // Find returns an array
  Cocktail.find().then(function(result) {
    const cocktailObject = {
      cocktails: result
    };
    res.render('cocktails/index', cocktailObject);
  });
  // This is what we previously did:
  // res.render('cocktails/index', cocktailObject);
});

// NEW Route: NOTE: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
app.get('/cocktails/new', function(req, res) {
  res.render('cocktails/new');
});

// Listen for POST requests to /cocktails
app.post('/cocktails', function(req, res) {
  console.log('We have not done this yet');
});

// SHOW Route
app.get('/cocktails/:id', function(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the database, using its ID
  // Get a particular cocktail then render an ejs file
  Cocktail.findById(req.params.id).then(result => {
    res.render('cocktails/show', result);
  });
  // Here's what we did earlier
  // const cocktail = cocktailObject.cocktails.filter(cocktail =>
  //   cocktail.id === req.params.id)[0];
  // res.render('cocktails/show', cocktail);
});

// UPDATE route
app.put('/cocktails/:id', function(req, res) {
  // req.params.id is the id of the cocktail we are trying
  // to update
  console.log(`Updating cocktail id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Cocktail.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index (for now!)
      res.redirect('/cocktails');
    });
});

// EDIT route
app.get('/cocktails/:id/edit', function(req, res) {
  // First get the cocktail from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Cocktail.findById(req.params.id)
    .then(result => {
      res.render('cocktails/edit', result);
    });
});

// DELETE Route
app.delete('/cocktails/:id', function(req, res) {
  Cocktail.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/cocktails'));
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
