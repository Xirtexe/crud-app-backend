const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.c");

// fetch all products
router.get("/", getAllProducts);
// fetch product by id
router.get("/:id", getProduct);
// create product
router.post("/", createProduct);
// update product by id
router.put("/:id", updateProduct);
// delete product by id
router.delete("/:id", deleteProduct);

module.exports = router;
