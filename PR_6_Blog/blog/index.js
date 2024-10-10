require("dotenv").config();
const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const path = require("path");
const database = require("./config/db");
const userRouter = require("./routes/user.routes");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// Routes
// app.use('/', require('./routes'));
app.use("/user", userRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  database();
});
