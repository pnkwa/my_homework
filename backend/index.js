const express = require('express');
const bodyParser = require('body-parser');
const Item = require('./model/item');
const cors = require('cors');

const app = express();
const port = 3040;

app.use(cors()); 
app.use(bodyParser.json());

app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const newItem = await Item.create(req.body);
  res.status(201).json(newItem);
});

app.listen(3040, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Database synced');
});
