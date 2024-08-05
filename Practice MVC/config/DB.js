const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Database Connected");
};

module.exports = dbConnect;
