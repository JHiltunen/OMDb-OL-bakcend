'use strict';
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const userModel = require('../models/userModel');

const user_create_post = async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req); // TODO require validationResult, see userController
  console.log("BODY: ", req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const salt = bcrypt.genSaltSync(12);
      const user = {};
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = bcrypt.hashSync(req.body.password, salt);
      
      const id = await userModel.insertUser(user);
      if (id > 0) {
        next();
        res.status(200).json({success: 'User added'})
      } else {
        res.status(400).json({error: 'register error'});
      }
    }
  };

  module.exports = {
      user_create_post,
  }