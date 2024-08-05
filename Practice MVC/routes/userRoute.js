const { Router } = require("express");
const { getUser, postUser } = require("../controllers/userController");
const userRouter = Router();
userRouter.get("/", getUser);
userRouter.post("/", postUser);

module.exports = userRouter;
