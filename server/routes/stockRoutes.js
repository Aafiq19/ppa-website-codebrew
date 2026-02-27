import express from "express";
import {
  getStock,
  updateStock,
  getLowStock,
} from "../controllers/stockController.js";

import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", protect, isAdmin, getStock);
router.put("/:id", protect, isAdmin, updateStock);
router.get("/low", protect, isAdmin, getLowStock);

export default router;