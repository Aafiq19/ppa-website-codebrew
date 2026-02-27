// models/Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: String,

    price: {
      type: Number,
      required: true,
    },

    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },

    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
    },

    reorderLevel: {
      type: Number,
      default: 5,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);