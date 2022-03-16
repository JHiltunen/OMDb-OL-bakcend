'use strict';

const axios = require('axios');
require('dotenv').config();

console.log(process.env.API_KEY);

const getMovie = async (t) => {
    const baseURL =  `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${t}`;

    const result = axios
        .get(baseURL)
        .then(response => {
            console.log("RESP", response.data);
            return response.data;
        }).catch(error => {
            console.log("Error", error);
            return error.message;
        });

    return result;
};


module.exports = {
    getMovie,
};