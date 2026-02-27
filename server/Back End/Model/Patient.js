const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  address: String,
  contact: String,
  medicalHistory: String
}, { timestamps: true });

module.exports = mongoose.model("Patient", PatientSchema);