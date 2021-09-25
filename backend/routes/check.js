const express = require("express");

const router = express.Router();

const checkControllers = require("../controllers/check");

router.post('/getUser',checkControllers.getUser);

module.exports = router;