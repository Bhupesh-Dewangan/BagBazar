const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");
const dotenv = require("dotenv");
dotenv.config();

module.exports.registerUser = function (req, res) {
  try {
    // console.log("Register User Endpoint Hit");
    // console.log(req.body);
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

          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User registered successfully");
        }
      });
    });
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
    console.log("Error registering user: " + error.message);
  }
};
