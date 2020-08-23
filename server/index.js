const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 2390;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('holi');
});

app.post('/');

app.put('/');

app.delete('/');

app.listen(PORT, () => {
  console.log('app running on port', PORT);
});
