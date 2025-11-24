const express = require("express");
const ownersRouter = express.Router();

const ownerModel = require("../models/owner-model");

// console.log("Owners Router Loaded");

if (process.env.NODE_ENV === "development") {
  ownersRouter.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(504)
        .send("You don't have permission to create a new owner.");
    }

    res.send("Owner creation is enabled in development mode.");

    let { fullName, email, password } = req.body;

    let newOwner = await ownerModel.create({
      fullName,
      email,
      password,
    });

    res.send(newOwner);
  });
}

ownersRouter.get("/", (req, res) => {
  res.send("Owners Home Page");
});

module.exports = ownersRouter;
