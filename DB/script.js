const express = require("express");
const dbConnect = require("./db");
const User = require("./user.schema");
const isValid = require("./validation");

const app = express();

app.use(express.json());

app.get("/get", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.post("/post", isValid, async (req, res) => {
  let data = await User.create(req.body);
  console.log(req.body);
  res.send(data);
});

app.patch("/patch/:id", async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndUpdate(id, req.body);
  res.send(data);
});

app.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
});

app.listen(2003, () => {
  console.log("listening...");
  dbConnect();
});
