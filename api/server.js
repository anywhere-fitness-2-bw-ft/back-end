const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const usersRouter = require("./users/users-router");
const classesRouter = require("./classes/classes-router");
const authRouter = require("./auth/auth-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.json("Welcome to the Anywhere Fitness API");
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
