const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  u: String,
  n: Number,
});

let user = mongoose.model("Users", userSchema);
module.exports = user;
