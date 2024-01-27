const express = require(`express`);
const { createUser } = require("../Controllers/UserController");
const { createIndexes } = require("../models/User");
const router = express.Router();

router.route('/createuser').post(createUser);

module.exports = router;