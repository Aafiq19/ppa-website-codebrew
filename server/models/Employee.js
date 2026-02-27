// models/Employee.js

import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
    },

    contactNumber: String,

    salary: Number,

    address: String,
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);