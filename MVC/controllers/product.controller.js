const product = require("../models/product.schema");

const getproduct = async (req, res) => {
  let data = await product.find();
  res.send(data);
};
const createproduct = async (req, res) => {
  let data = await product.create(req.body);
  res.status(201).send(data);
};

const deleteProduct = async (req, res) => {
  let { id } = req.params;
  let data = await product.findByIdAndDelete(id);
  res.send(data);
};

const updateProduct = async (req, res) => {
  let { id } = req.params;
  let data = await product.findByIdAndUpdate(id, req.body);
  res.send(data);
};

module.exports = { getproduct, createproduct, deleteProduct, updateProduct };
