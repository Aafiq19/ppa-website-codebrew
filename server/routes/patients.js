// server/routes/patientRoutes.js
import express from "express";
import Patient from "../models/Patient.js";
import verifyToken from "../middleware/auth.js"; // make sure auth.js also uses ES Modules

const router = express.Router();

// CREATE a patient
router.post("/", verifyToken, async (req, res) => {
  const newPatient = new Patient(req.body);
  try {
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all patients
router.get("/", verifyToken, async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET patient by ID
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE patient
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE patient
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json("Patient deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;