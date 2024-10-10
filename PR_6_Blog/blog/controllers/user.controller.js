const User = require("../models/user.schema");

const signup = async (req, res) => {
  let { username, password, email, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.send({
        username: user.username,
        msg: "User Already Exist!!!",
      });
    } else {
      user = await User.create(req.body);
      return res
        .cookie("role", user.role)
        .cookie("id", user.id)
        .send(`Account created successfully ${user.username}`);
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
    return res.send("Invalid Credentials.");
  } else {
    if (user.password !== password) {
      return res.send("Invalid Credentials.");
    } else {
      return res
        .cookie("role", user.role)
        .cookie("id", user.id)
        .send({ msg: "Login Successfull" });
    }
  }
};

module.exports = { signup, signupPage, login, loginPage };
