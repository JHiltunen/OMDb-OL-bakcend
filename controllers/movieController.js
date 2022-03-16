const axios = require('axios')
require('dotenv').config()

console.log(process.env.API_KEY);

const movie_list_get = async (req, res) => {
    const baseURL =  `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.query.t}`;

    axios
        .get(baseURL)
        .then(response => {
            return res.json(response.data);
        }).catch(error => {
            return res.json(error);
        });
};

module.exports = {
  movie_list_get,
};