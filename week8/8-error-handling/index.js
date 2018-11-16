const express = require('express');
const app = express();
const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

// NOTE: A very simple error handler.
app.use(function(error, req, res, next) {
  console.log('There was an error', error);
  if (error.name === 'ValidationError') {
    res.status(422).json(error.errors);
  } else if (error) {
    res.status(500).send(error._message);
  } else {
    next();
  }
});

app.listen(env.port, () => console.log(`Up and running on ${env.port}`));
