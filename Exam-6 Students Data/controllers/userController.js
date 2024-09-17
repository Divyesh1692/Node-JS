const user = require("../models/userSchema");

const path = require("path");

const signup = async (req, res) => {
  let { email } = req.body;
  let isUser = await user.findOne({ email: email });
  if (isUser) {
    return res.send("User Already Exist!!!");
  } else {
    let data = await user.create(req.body);
    return res.send(data);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;

  let isUser = await user.findOne({ email: email });
  if (isUser) {
    if (isUser.password != password) {
      return res.send("Invalid Password!!!");
    }
    return res.send(isUser);
  } else {
    return res.status(404).send("User Not Found");
  }
};

const getData = async (req, res) => {
  let data = await user.find();
  let { search, sort } = req.query;
  console.log(search);
  if (search) {
    data = await user.find({ name: search });
  }
  console.log(sort);

  if (sort == "atoz") {
    await data.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort == "ztoa") {
    await data.sort((a, b) => b.name.localeCompare(a.name));
  }
  res.send(data);
};

const filter = async (req, res) => {
  let { search } = req.query;
  console.log(search);

  let data = await user.find({ search });

  console.log(data);
  res.send(data);
};

module.exports = { login, signup, getData, filter };
