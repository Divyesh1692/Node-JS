require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const path = require("path");
const database = require("./config/db");
const userRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const User = require("./models/user.schema");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
// app.use('/', require('./routes'));
app.use("/", userRouter);
app.use("/", movieRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  database();
});
