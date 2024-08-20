const express = require("express");
const app = express();
app.use(express.json());

app.post("/sum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(`Sum a+b = ${Number(a) + Number(b)}`);
});

app.post("/sub/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(`Subtraction a-b = ${a - b}`);
});
app.post("/multi/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(`Multiplication a*b = ${a * b}`);
});
app.post("/div/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(`Divison a/b = ${a / b}`);
});

app.listen("2005", () => {
  console.log("listening...");
});
