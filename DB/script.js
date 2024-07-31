const express = require("express");
const dbConnect = require("./db");
const User = require("./user.schema");

const app = express();

app.use(express.json());

app.get("/get", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.post("/post", async (req, res) => {
  let data = await User.create(req.body);
  console.log(req.body);
  res.send(data);
});

app.listen(2003, () => {
  console.log("listening...");
  dbConnect();
});
