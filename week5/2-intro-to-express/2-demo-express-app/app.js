const express = require('express');
const app = express();
const port = 4000;

// Respond to: GET servername/
app.get('/', (req, res) => res.send(`
<html>
  <body>
    <h1>Welcome to the home page</h1>
    <p>It's our first web app</p>
    <footer>Made by WDI 37</footer>
  </body>
</html>`));
app.get('/about', (req, res) => res.send('The about page!'));
app.get('/data', (req, res) => {
  const myData = 'Camel';
  res.send(`
    <h1>My favourite case</h1>
    <p>My favourite case is ${myData}</p>
  `);
});

app.listen(port); // Listen on port 4000
