const express = require("express");
const dbConnect = require("./config/db");
const app = express();
const cors = require("cors");
app.use(cors());

app.listen("2000", () => {
  console.log("Listening");
  dbConnect();
});
