const { Router } = require("express");

const productsRouter = Router();

const {
  createProduct,
  getProducts,
} = require("../controllers/productsController");

productsRouter.post("/", createProduct);

productsRouter.get("/", getProducts);

module.exports = productsRouter;
