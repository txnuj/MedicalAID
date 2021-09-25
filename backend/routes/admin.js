const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin");

router.get('/api/getAllPatients',adminControllers.getAllPatients);
router.post('/api/registerPatient',adminControllers.createPatientProfile);

module.exports = router;