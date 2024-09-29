const { Router } = require("express");
const {
  signup,
  login,
  Delete,
  users,
} = require("../controllers/user.controller");

const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete("/delete/:id", Delete);
userRouter.get("/", users);

module.exports = userRouter;
