require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dbConnect = require("./config/db");
const bookRouter = require("./routes/book.route");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));

// Routes
// app.use('/', require('./routes'));
app.use("/", bookRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnect();
});
