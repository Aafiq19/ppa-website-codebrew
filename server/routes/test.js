import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Test route to add a user
router.post("/add-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;