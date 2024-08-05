const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  Task: String,
  _id: String,
});

let task = mongoose.model("task", taskSchema);
module.exports = task;
