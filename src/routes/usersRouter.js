const { Router } = require("express");

const usersRouter = Router();

const { createUser } = require("../controllers/usersController");

usersRouter.post("/", createUser);

module.exports = usersRouter;
