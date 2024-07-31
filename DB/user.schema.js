const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  number: Number,
  email: String,
  password: String,
});

let User = mongoose.model("Users", userSchema);
module.exports = User;
