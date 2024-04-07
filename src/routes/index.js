const { Router } = require("express");
const productsRouter = require("./productsRouter");
const brandsRouter = require("./brandsRouter");
const usersRouter = require("./usersRouter");

const mainRouter = Router();

mainRouter.use("/products", productsRouter);

mainRouter.use("/brands", brandsRouter);

mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
