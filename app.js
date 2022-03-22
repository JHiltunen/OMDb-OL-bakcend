'use strict';

const express = require('express');
const app = express();
const port = process.env. PORT || 3000;
const movieRouter = require('./routes/movieRouter');
const bookRouter = require('./routes/bookRouter');
const userRouter = require('./routes/userRouter');
const authRoute = require('./routes/authRoute');
const passport = require('./utils/pass');
const cors = require('cors');

app.use(cors());
app.use(express.static('public')); // serve static content of public folder. These files can be accessed publicly
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/auth', authRoute);
app.use('/user', userRouter);
app.use('/getMovie', passport.authenticate('jwt', {session: false}), movieRouter);
app.use('/getBook', passport.authenticate('jwt', {session: false}), bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});