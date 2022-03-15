'use strict';

const express = require('express');
const app = express();
const port = 3000;
const movieRouter = require('./routes/movieRouter');

app.use(express.static('public'));

app.use('/getMovie', movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});