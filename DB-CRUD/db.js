const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/User");
  console.log("DB Connected...");
};

module.exports = dbConnect;
