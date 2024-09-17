require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const database = require("./config/db");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));

// Routessss
// app.use('/', require('./routes'));
app.use("/user", userRoute);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  database();
});
