const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  password: String,
  profile: String,
  role: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;
