const express = require("express");
const cowsay = require("cowsay");
const app = express();
app.use(express.json());
app.get("/cowsay/:Text/:E/:t", (req, res) => {
  const { Text, E, t } = req.params;
  let output = cowsay.say({
    text: Text,
    e: E,
    T: t,
  });
  res.send(output);
});

app.listen(2003, () => {
  console.log("listening...");
});
