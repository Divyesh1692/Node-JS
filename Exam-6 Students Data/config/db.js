const mongoose = require("mongoose");

require("dotenv").config();

const database = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("DataBase Connected...");
};

module.exports = database;
