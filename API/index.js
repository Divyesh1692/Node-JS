const { log } = require("console");
const express = require("express");
const app = express();
app.listen("2000", () => {
  console.log("Listening");
});
app.get("/api1", (req, res) => {
  res.send("<h1>Hello API 1</h1>");
});
app.get("/api2", (req, res) => {
  res.send("<h1>Hellp API 2</h1>");
});
