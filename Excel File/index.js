require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");
const studentRouter = require("./routes/route");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
// app.use('/', require('./routes'));
app.use("/", studentRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db();
});
