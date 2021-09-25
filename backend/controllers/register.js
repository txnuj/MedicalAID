const Patient = require("../models/patient");
const Ailments = require("../models/ailments");

exports.createPatientProfile = (req, res, next) => {
  const patient_name = req.body.name;
  const blood_group = req.body.blood_group;
  const patient_district = req.body.district;
  const patient_dob = req.body.dob;
  const patient_gender = req.body.gender;
  const patient_mobile = req.body.mobile;
  const patient_email = req.body.email;
  const password = "123456";
  Patient.create({
    patient_name: patient_name,
    blood_group: blood_group,
    patient_dob: patient_dob,
    patient_gender: patient_gender,
    patient_mobile: patient_mobile,
    patient_district: patient_district,
    patient_email: patient_email,
    password: password,
  })
    .then((res) =>
      res.status(201).json({
        message: "data received",
      })
    )
    .catch((err) => res.json({ message: err }));
};
