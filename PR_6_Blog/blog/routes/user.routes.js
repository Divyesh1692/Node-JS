const { Router } = require("express");
const {
  signupPage,
  signup,
  loginPage,
  login,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/signup", signupPage);
userRouter.post("/signup", signup);
userRouter.get("/login", loginPage);
userRouter.post("/login", login);

module.exports = userRouter;
