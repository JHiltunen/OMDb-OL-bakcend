const bookModel = require('../models/bookModel');

const book_get = async (req, res) => {
    const bookResp = await bookModel.getBookInfo(req.query.isbn);
    
    res.json(bookResp);
};

module.exports = {
  book_get,
};