const movieModel = require('../models/movieModel');

const movie_list_get = async (req, res) => {
    const movieResp = await movieModel.getMovie(req.query.t);
    res.json(movieResp);
};

module.exports = {
  movie_list_get,
};