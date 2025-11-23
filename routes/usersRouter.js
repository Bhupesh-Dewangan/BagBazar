const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("Users Home Page");
});

module.exports = usersRouter;