const express = require("express");

const router = express.Router();

const loginControllers = require("../controllers/login");

router.post('/api/verifyAdmin',loginControllers.verifyAdmin);

module.exports = router;