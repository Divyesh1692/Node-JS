const { Router } = require("express");
const {
  signup,
  login,
  getData,
  filter,
  Upload,
} = require("../controllers/userController");

const userRoute = Router();
userRoute.post("/signup", Upload.single("profile"), signup);
userRoute.post("/login", login);
userRoute.get("/home", getData);
// userRoute.get("/home", filter);

module.exports = userRoute;
