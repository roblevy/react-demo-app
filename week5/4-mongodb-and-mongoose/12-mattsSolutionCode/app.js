const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

const session = require('express-session');

const environment = require('./config/environment');
const router = require('./config/routes');
const auth = require('./lib/auth');

const mongoose = require('mongoose');
mongoose.connect(environment.dbUri);

const port = environment.port;

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(session({
  secret: 'woof',
  resave: false,
  saveUninitialized: false
}));

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('*', function(req, res, next) {
  console.log('Incoming request:', req.method, req.originalUrl);
  next();
});

app.use('*', auth.checkAuthStatus);

app.use(router);

app.listen(port, () => console.log(`Listening for changes on port ${port}`));
