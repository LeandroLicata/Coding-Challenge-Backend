const { Router } = require("express");

const usersRouter = Router();

const { createUser, loginUser } = require("../controllers/usersController");

usersRouter.post("/register", createUser);

usersRouter.post("/login", loginUser);

module.exports = usersRouter;
