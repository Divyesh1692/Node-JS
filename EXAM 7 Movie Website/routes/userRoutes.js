const { Router } = require("express");
const { signup, login } = require("../controllers/userController");
const { validate } = require("../models/user.schema");

const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;
