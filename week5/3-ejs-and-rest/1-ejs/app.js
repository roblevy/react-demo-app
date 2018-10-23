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
  res.render('layout', {}); // An empty object = no data
});

app.get('/cocktails', function(req, res) {
  res.render('layout', cocktailObject);
});

app.get('/cocktails/:index', function(req, res) {
  const cocktails = cocktailObject.cocktails;
  res.send(`
    <h1>${cocktails[req.params.index].name}</h1>
    <img src="${cocktails[req.params.index].image}" />
  `);
});
app.listen(port, () => console.log(`Express is listening on port ${port}`));
