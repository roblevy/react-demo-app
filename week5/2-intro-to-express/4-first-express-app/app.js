const express = require('express');
const app = express();
const port = 4000;
const cocktailObject = require('./db/data');

app.get('/', function(req, res) {
  res.send('Working');
});

app.get('/cocktails', function(req, res) {
  const cocktails = cocktailObject.cocktails;
  const cocktailLIs = cocktails.map((cocktail, i) =>
    `<li><a href="/cocktails/${i}">${cocktail.name}</a></li>`).join('');
  res.send(
    `
      <h1>The cocktail menu 🍸</h1>
      <ul>
        ${cocktailLIs}
      </ul>
    `
  );
});

app.get('/cocktails/:index', function(req, res) {
  const cocktails = cocktailObject.cocktails;
  res.send(`
    <h1>${cocktails[req.params.index].name}</h1>
    <img src="${cocktails[req.params.index].image}" />
  `);
});
app.listen(port, () => console.log(`Express is listening on port ${port}`));
