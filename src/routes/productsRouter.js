const { Router } = require("express");

const productsRouter = Router();

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

productsRouter.post("/", createProduct);

productsRouter.get("/", getProducts);

productsRouter.get("/:id", getProduct);

productsRouter.put("/:id", updateProduct);

productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
