const { request } = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DataBase Connecgted!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
