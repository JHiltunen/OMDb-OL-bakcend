'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const insertUser = async (user) => {
  console.log('user', user);

    const [row] = await promisePool.execute('INSERT INTO users(name, email, password) VALUES (?,?,?)', [user.name, user.email, user.password]);
    console.log('insert row', row);
    return row.insertId;
};

module.exports = {
  insertUser,
};