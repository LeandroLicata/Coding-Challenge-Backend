const { Router } = require("express");
const productsRouter = require("./productsRouter");
const brandsRouter = require("./brandsRouter");

const mainRouter = Router();

mainRouter.use("/products", productsRouter);

mainRouter.use("/brands", brandsRouter);

module.exports = mainRouter;
