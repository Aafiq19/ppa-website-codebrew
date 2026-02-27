const router = require("express").Router();
const Patient = require("../models/Patient");
const verifyToken = require("../middleware/auth");

router.post("/", verifyToken, async (req, res) => {
  const newPatient = new Patient(req.body);
  try {
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json("Patient deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;