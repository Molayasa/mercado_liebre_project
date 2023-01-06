const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

/* app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
}); */

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
