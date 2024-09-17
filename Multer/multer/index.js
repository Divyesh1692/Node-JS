require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { upload } = require("./controllers/user.controller");

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));

app.post("/upload", upload.single("img"), (req, res) => {
  res.send("File Uploaded...");
});

// Routes
// app.use('/', require('./routes'));

app.get("/index", (req, res) => {
  res.render("index");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
