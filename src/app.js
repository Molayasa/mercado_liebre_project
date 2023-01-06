const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

/* app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
}); */

app.get('/', (req, res) => {
  console.log(__dirname, __filename);
 
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
