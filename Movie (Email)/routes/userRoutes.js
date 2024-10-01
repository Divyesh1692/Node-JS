const { Router } = require("express");
const {
  signup,
  login,
  signupPage,
  loginPage,
  verifyPage,
  verify,
} = require("../controllers/userController");
const { validate } = require("../models/user.schema");

const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/signup", signupPage);
userRouter.get("/login", loginPage);
userRouter.get("/approve", verifyPage);
userRouter.post("/verify", verify);

module.exports = userRouter;
