'use strict';

const axios = require('axios');
require('dotenv').config();

const getBookInfo = async (isbn) => {
    const baseURL =  `https://openlibrary.org/isbn/${isbn}.json`;

    const result = axios
        .get(baseURL)
        .then(response => {
            console.log("RESP", response.data);
            return response.data;
        }).catch(error => {
            console.log("Error", error);
            return error;
        });

    return result;
};


module.exports = {
    getBookInfo,
};