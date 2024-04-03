const { Router } = require("express");

const productsRouter = Router();

const {
  createProduct,
  getProducts,
  getProduct
} = require("../controllers/productsController");

productsRouter.post("/", createProduct);

productsRouter.get("/", getProducts);

productsRouter.get("/:id", getProduct);

module.exports = productsRouter;
