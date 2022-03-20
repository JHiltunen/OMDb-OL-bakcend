'use strict';
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
.post([
  body('name', 'minimum 3 characters').isLength({min: 3}),
  body('email', 'email is not valid').isEmail(),
  body('password', 'at least one upper case letter').
      matches('(?=.*[A-Z]).{8,}'),
  body('name').isLength({ min: 3 }).trim().escape().blacklist(';'),
],
userController.user_create_post,);

module.exports = router;