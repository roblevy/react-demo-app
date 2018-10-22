const express = require('express');
const app = express();

const port = 4000;

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('layout', {});
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening for changes on port ${port}`));
