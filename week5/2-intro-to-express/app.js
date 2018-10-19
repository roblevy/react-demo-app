const express = require('express');
const app = express();

const jams = [
  {
    name: 'Strawberry',
    id: '123'
  }, {
    name: 'Raspberry',
    id: '456'
  }
];

app.get('/', (req, res) => {
  res.send('Home!');
});

app.get('/jams', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>All the jams</h1>
        <ul>
        ${jams.map(jam => {
          return `<li><a href='/jams/${jam.id}'>${jam.name}</a></li>`;
        })}
        </ul>
      </body>
    </html>
  `);
});

app.get('/jams/:id', (req, res) => {
  console.log(req.params);
  const jam = jams.filter(jam => jam.id === req.params.id)[0];
  res.send(`
      <html>
        <body>
          <h1>A Jam</h1>
          ${jam.name}
        </body>
      </html>
    `);
});

app.listen(4000, () => console.log('Express is listening on port 4000'));
