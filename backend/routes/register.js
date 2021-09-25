const express = require("express");

const router = express.Router();

const registerControllers = require("../controllers/register");

router.post('/api/registerPatient',registerControllers.createPatientProfile);

module.exports = router;