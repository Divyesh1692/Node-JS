const User = require("../models/user.Schema");

const signup = async (req, res) => {
  let { username, email, password } = req.body;
  let isUser = await User.findOne({ email });
  if (!isUser) {
    let user = { username, email, password };
    let data = await User.create(user);
    return res.status(201).send(data);
  } else {
    return res.status(201).send(isUser);
  }
};

const login = async (req, res) => {
  let { username, password } = req.body;
  let isUser = await User.findOne({ username });
  if (isUser) {
    if (isUser.password == password) {
      return res.status(200).send({ message: "Logged in successfully" });
    } else {
      return res.status(401).send({ error: "Invalid username or password" });
    }
  } else {
    return res.status(401).send({ error: "Invalid username or password" });
  }
};

const users = async (req, res) => {
  let data = await User.find();
  res.status(200).send(data);
};

const Delete = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send({ message: "User deleted successfully", data });
};

module.exports = { signup, login, users, Delete };
