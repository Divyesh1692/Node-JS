const { Router } = require("express");
const {
  signup,
  login,
  signupPage,
  loginPage,
} = require("../controllers/userController");
const { validate } = require("../models/user.schema");

const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/signup", signupPage);
userRouter.get("/login", loginPage);

module.exports = userRouter;
