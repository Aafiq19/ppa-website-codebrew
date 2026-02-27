import Product from "../models/Product.js";

/* GET ALL PRODUCTS WITH STOCK */
export const getStock = async (req, res) => {
  const products = await Product.find().populate("supplier");
  res.json(products);
};

/* UPDATE STOCK */
export const updateStock = async (req, res) => {
  const { quantity } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product)
    return res.status(404).json({ message: "Product not found" });

  product.stockQuantity = quantity;
  await product.save();

  res.json({ message: "Stock updated successfully" });
};

/* LOW STOCK ALERT */
export const getLowStock = async (req, res) => {
  const lowStockProducts = await Product.find({
    $expr: { $lt: ["$stockQuantity", "$reorderLevel"] },
  });

  res.json(lowStockProducts);
};