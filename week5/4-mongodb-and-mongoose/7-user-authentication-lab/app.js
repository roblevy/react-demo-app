const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const environment = require('./config/environment');
const router = require('./config/routes');

const mongoose = require('mongoose');
mongoose.connect(environment.dbUri);

const port = environment.port;

app.use(express.static('public'));

app.use(methodOverride('_method'));

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('*', function(req, res, next) {
  console.log('Incoming request:', req.method, req.url);
  next();
});

app.use(router);

app.listen(port, () => console.log(`Listening for changes on port ${port}`));