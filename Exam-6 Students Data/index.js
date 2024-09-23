require("dotenv").config();
const express = require("express");
const path = require("path");
const database = require("./config/db");
const userRoute = require("./routes/userRoutes");
const cookies = require("cookie-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8090;

// Middleware
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));

// Routessss
// app.use('/', require('./routes'));
app.use("/user", userRoute);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  database();
});
