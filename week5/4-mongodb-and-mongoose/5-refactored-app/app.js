const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');

mongoose.connect(env.dbUri);

const app = express();

// Use method override to change HTML form POST requests
// into other types of request like PUT
app.use(methodOverride('_method'));

// We need this to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Send static files like .js .css .png etc
// from the public folder:
app.use(express.static('public'));

app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
