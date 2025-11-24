const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URL")}/bagbazar`)
  .then(() => {
    // console.log("ho gya hai...");
    dbgr("MongoDB connected successfully");
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    // console.log("error aa gya hai...");
    dbgr("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
