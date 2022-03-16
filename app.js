'use strict';

const express = require('express');
const app = express();
const port = 3000;
const movieRouter = require('./routes/movieRouter');
const bookRouter = require('./routes/bookRouter');

app.use(express.static('public'));

app.use('/getMovie', movieRouter);
app.use('/getBook', bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});