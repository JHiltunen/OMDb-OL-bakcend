const https = require('https');

const movie_list_get = async (req, res) => {
    const baseURL = 'http://www.omdbapi.com/?apikey=[yourkey]&';

    const options = {
        hostname: baseURL,
        method: 'GET'
    };

    const request = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        
        res.on('data', d => {
            return d;
        });
    });

    request.on('error', error => {
        console.error(error);
        return res.json(error);
    });

};

module.exports = {
  movie_list_get,
};