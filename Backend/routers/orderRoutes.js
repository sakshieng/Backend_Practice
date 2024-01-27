const express = require(`express`);
const router = express.Router();
const {issueBook,renewBook,returnBook} = require('../Controllers/OrderController');

router.route('/createorder').post(issueBook);

module.exports = router;