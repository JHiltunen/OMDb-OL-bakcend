const movieModel = require('../models/movieModel');

const movie_get = async (req, res) => {
    const title = req.query.t;
    const year = req.query.y;
    const plot = req.query.plot;

    if (typeof title === undefined || title == null) {
        res.status(404).json({Response: false, Error: 'Parameter t is required. Search with title.'});
        return;
    }

    const movieResp = await movieModel.getMovie(req.query.t, year, plot);
    res.json(movieResp);
};

module.exports = {
    movie_get,
};