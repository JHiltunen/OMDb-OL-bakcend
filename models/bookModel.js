'use strict';

const axios = require('axios');
const getBookInfo = async (isbn) => {
    const baseURL =  `https://openlibrary.org/isbn/${isbn}.json`;

    const result = axios
        .get(baseURL)
        .then(response => {
            console.log("RESP", response.data);
            return response.data;
        }).catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return {Response: false, Error: `${error.message}`, Status: `${error.response.status}`};
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                return error.request;
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                return error.message;
              }
        });

    return result;
};


module.exports = {
    getBookInfo,
};