const express = require("express");
const ownersRouter = express.Router();

ownersRouter.get("/", (req, res) => {
  res.send("Owners Home Page");
});

module.exports = ownersRouter;