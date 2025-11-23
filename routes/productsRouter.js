const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.send("Products Home Page");
});

module.exports = productsRouter;
