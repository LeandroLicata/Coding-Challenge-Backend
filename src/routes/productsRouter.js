const { Router } = require("express");

const productsRouter = Router();

const { createProduct } = require("../controllers/productsController");

productsRouter.post("/", createProduct);

module.exports = productsRouter;
