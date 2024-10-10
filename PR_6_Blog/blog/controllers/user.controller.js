const User = require("../models/user.schema");

const signup = async (req, res) => {
  let { username, password, email, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.send({ msg: "User Already Exist!!!", user: user.username });
    } else {
      user = await User.create(req.body);
      return res
        .cookie("id", user.id)
        .cookie("role", user.role)
        .send({ msg: `Account created successfully ${user.username}` });
    }
  } catch (error) {
    res.send(error.msg);
  }
};

const signupPage = (req, res) => {
  res.render("signup");
};

const loginPage = (req, res) => {
  res.render("login");
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.send({ msg: "Not Found" });
  } else {
    if (user.password !== password) {
      return res.send({ msg: "Incorrect Password" });
    } else {
      return res
        .cookie("id", user.id)
        .cookie("role", user.role)
        .send({ msg: "Login Successfull" });
    }
  }
};

module.exports = { signup, signupPage, login, loginPage };
