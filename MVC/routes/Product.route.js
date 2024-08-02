const { Router } = require("express");
const {
  getproduct,
  createproduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const productRouter = Router();
productRouter.get("/", getproduct);
productRouter.post("/", createproduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", updateProduct);

module.exports = productRouter;
