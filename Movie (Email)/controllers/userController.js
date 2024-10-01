const User = require("../models/user.schema");
const path = require("path");
const Sendmail = require("../services/mailservice");

const otps = new Map();
const signup = async (req, res) => {
  let { username, email, password } = req.body;
  let isUser = await User.findOne({ email });
  if (isUser) {
    // res.send({ msg: "User Already Exist!!!" });
    return res.send({ msg: "User Already Exist!!!" });
  } else {
    let user = { username, email, password };
    let data = await User.create(user);
    let otp = Math.round(Math.random() * 10000);
    otps.set(email, otp);
    let html = `<h1> ${user.username} </h1> <h1>One Time Password(OTP) : ${otp} </h1> 
    <a href="http://localhost:8090/verify" >Verify Your Account </a>`;
    await Sendmail(email, "Account Verification", html);
    console.log(data);
    res.send(data);
  }
};

const verify = async (req, res) => {
  let { OTP } = req.body;
  console.log(OTP);

  let { id } = req.cookies;
  let user = await User.findById(id);
  console.log(user);

  if (!user) {
    res.send("user not found");
  } else {
    console.log(otps.get(user.email == OTP));
    let o = otps.get(user.email);
    console.log(o);
    if (o == OTP) {
      user = await User.findByIdAndUpdate(id, { verified: true });
      res.send("");
    } else {
      res.send({ msg: "Invalid OTP !!!" });
    }
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let isUser = await User.findOne({ email });
  if (isUser) {
    if (isUser.password == password) {
      return res.send({ msg: "Login Successful...!!!", User: isUser });
    } else {
      return res.send({ msg: "Password is Incorrect!!!" });
    }
  } else {
    return res.send({ msg: "User Not Found...!!!" });
  }
};

const verifyPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "approve.html"));
};

const loginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "login.html"));
};

const signupPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "signup.html"));
};

module.exports = { signup, login, loginPage, signupPage, verify, verifyPage };
