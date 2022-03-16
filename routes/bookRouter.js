const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.route('/')
  .get(bookController.book_get);

module.exports = router;