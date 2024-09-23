const User = require("../models/user.schema");

const signup = async (req, res) => {
  let { username, email, password } = req.body;
  let isUser = await User.findOne({ email });
  if (isUser) {
    // res.send({ msg: "User Already Exist!!!" });
    return res.send({ msg: "User Already Exist!!!" });
  } else {
    let user = { username, email, password };
    let data = await User.create(user);
    console.log(data);
    res.send(data);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let isUser = await User.findOne({ email });
  if (isUser) {
    if (isUser.password == password) {
      return res.send({ msg: "Login Successful...!!!" });
    } else {
      return res.send({ msg: "Password is Incorrect!!!" });
    }
  } else {
    return res.redirect("signup").send({ msg: "User Not Found...!!!" });
  }
};

module.exports = { signup, login };
