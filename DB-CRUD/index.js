const express = require("express");
const dbConnect = require("./db");
const User = require("./schema");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await User.find();
  res.status(200).send(data);
});

app.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  let data = await User.findById(_id);
  res.status(200).send(data);
});

app.post("/", async (req, res) => {
  let data = await User.create(req.body);
  res.status(201).send(data);
});

app.patch("/:_id", async (req, res) => {
  let { _id } = req.params;
  let data = await User.findByIdAndUpdate(_id, req.body);
  res.status(201).send(data);
});

app.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  let data = await User.findByIdAndDelete(_id);
  res.status(200).send(data);
});

app.listen(8090, () => {
  console.log("Listening....");
  dbConnect();
});
