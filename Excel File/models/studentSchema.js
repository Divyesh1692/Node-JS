const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  number: String,
  standard: String,
  marks: Number,
});

const student = new mongoose.model("student", studentSchema);

module.exports = student;
