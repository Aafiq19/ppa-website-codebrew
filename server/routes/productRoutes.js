import express from "express";
import { getStock, updateStock, getLowStock } from "../controllers/stockController.js";

const router = express.Router();

// Routes
router.get("/", getStock);           // Get all products
router.put("/:id", updateStock);    // Update stock for a product
router.get("/low", getLowStock);    // Get low stock products

export default router;