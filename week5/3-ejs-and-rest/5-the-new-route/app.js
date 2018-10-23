const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const bodyParser = require('body-parser');
const app = express();

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
  res.render('cocktails/index', cocktailObject);
});

// NEW Route: NOTE: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
app.get('/cocktails/new', function(req, res) {
  res.render('cocktails/new');
});

// Listen for POST requests to /cocktails
app.post('/cocktails', function(req, res) {
  console.log('Here is the request method, url and body', req.method, req.url, req.body);
  // Add the cocktail described by req.body to the list of cocktails
  req.body.id = (Math.random() * 100000).toString();
  cocktailObject.cocktails.push(req.body);
  // Redirect the user to the index page:
  res.redirect('/cocktails');
});

// SHOW Route
app.get('/cocktails/:id', function(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the array, using its ID
  const cocktail = cocktailObject.cocktails.filter(cocktail =>
    cocktail.id === req.params.id)[0];
  res.render('cocktails/show', cocktail);
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
