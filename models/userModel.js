'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const insertUser = async (user) => {
  console.log('user', user);

    const [row] = await promisePool.execute('INSERT INTO users(name, email, password) VALUES (?,?,?)', [user.name, user.email, user.password]);
    console.log('insert row', row);
    return row.insertId;
};

const getUserLogin = async (params) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
        'SELECT * FROM users WHERE email = ?;',
        params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    console.log('userModel getUser', id);
    const [rows] = await promisePool.execute('SELECT * FROM users WHERE ID = ?', [id]);
    return rows[0];
  } catch (e) {
    console.error('userModel:', e.message);
  }
};

module.exports = {
  insertUser,
  getUserLogin,
  getUser,
};