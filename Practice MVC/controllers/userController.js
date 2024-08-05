const user = require("../models/userchema");

const getUser = async (req, res) => {
  let data = await user.find();
  res.send(data);
};

const postUser = async (req, res) => {
  let data = await user.create(req.body);
  res.send(data);
};

module.exports = { getUser, postUser };
