const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;
