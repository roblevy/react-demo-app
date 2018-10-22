const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express

const app = express();

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

// SHOW Route
app.get('/cocktails/:id', function(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the array, using its ID
  const cocktail = cocktailObject.cocktails.filter(cocktail =>
    cocktail.id === req.params.id)[0];
  res.render('cocktails/show', cocktail);
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
