const express = require("express");
const usersRouter = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

usersRouter.get("/", (req, res) => {
  res.send("Users Home Page");
});

usersRouter.post("/register", async (req, res) => {
  try {
    let { fullname, email, password } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res.status(500).send("Error hashing password: " + err.message);
        } else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });

          
          res.cookie("token", token);
          res.send("User registered successfully");
        }
      });
    });
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
});

module.exports = usersRouter;
