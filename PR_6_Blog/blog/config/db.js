const mongoose = require("mongoose");

require("dotenv").config();

const database = async () => {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Database Connected..!!!");
};

module.exports = database;