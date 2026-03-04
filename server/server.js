// server/server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load .env
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit if connection fails
  });

// Example test route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));