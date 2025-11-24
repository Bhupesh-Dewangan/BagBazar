const express = require("express");
const usersRouter = express.Router();
const { registerUser } = require("../controller/authController");

usersRouter.get("/", (req, res) => {
  res.send("Users Home Page");
});

usersRouter.post("/register", registerUser);

module.exports = usersRouter;
