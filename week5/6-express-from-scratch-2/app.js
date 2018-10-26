const express = require('express');
const app = express();
const router = require('./config/routes');
const port = 4000;
// Set up to use EJS
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs'); // Means we don't need the .ejs extension on view files
app.use(ejsLayouts);

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/de-beers');

// Logging middleware
app.use('*', function(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});

app.use(router);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
