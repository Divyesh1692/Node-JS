require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const database = require("./config/db");
const userRouter = require("./routes/user.route");
const cors = require("cors");
const movieRouter = require("./routes/movie.route");
const PORT = process.env.PORT || 8090;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/movie", movieRouter);

// Routes
// app.use('/', require('./routes'));
app.get("/", (req, res) => {
  res.send("Welcome to the movie API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  database();
});
