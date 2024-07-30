const { log } = require("console");
const express = require("express");
const app = express();
app.listen("2000", () => {
  console.log("running");
});
app.get("/api1", (req, res) => {
  res.send("hello");
});
