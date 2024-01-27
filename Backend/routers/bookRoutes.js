const express = require(`express`);
const router = express.Router();

const {createBook,getSingleBook,getAllBooks,updateBook,deleteBook} = require('../Controllers/BookController');

router.route('/').post(createBook).get(getAllBooks);
router.route('/singlebook').post(getSingleBook).put(updateBook).delete(deleteBook);

module.exports = router;