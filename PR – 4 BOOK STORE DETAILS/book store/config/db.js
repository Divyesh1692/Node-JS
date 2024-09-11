const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  await mongoose.connect(process.env.db_url);
  console.log("Database Connected...");
};
module.exports = dbConnect;
