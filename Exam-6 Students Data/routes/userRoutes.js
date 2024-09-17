const { Router } = require("express");
const {
  signup,
  login,
  getData,
  filter,
} = require("../controllers/userController");

const userRoute = Router();
userRoute.post("/signup", signup);
userRoute.post("/login", login);
userRoute.get("/home", getData);
// userRoute.get("/home", filter);

module.exports = userRoute;
