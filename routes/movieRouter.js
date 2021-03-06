const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.route('/')
  .get(movieController.movie_get);

module.exports = router;