const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  Name: String,
  Price: Number,
  Category: String,
  Quantity: Number,
  _id: Number,
});

let product = mongoose.model("product", productSchema);
module.exports = product;
