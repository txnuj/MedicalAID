const express = require("express");

const router = express.Router();

const loginControllers = require("../controllers/login");

router.post('/api/verifyAdmin',loginControllers.verifyAdmin);
router.post('/api/verifyPatient',loginControllers.verifyPatient);

module.exports = router;