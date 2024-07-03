// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/card/:id', (req, res) => {
  const id = req.params.id;
  // Mock data for simplicity
  const data = {
    1: { content: 'Card 1 data' },
    2: { content: 'Card 2 data' },
  };
  if (data[id]) {
    res.json(data[id]);
  } else {
    res.status(404).send('Card not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
