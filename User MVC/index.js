const express = require("express");
const dbConnect = require("./config/DB");
const userRouter = require("./routes/userRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ msg: "node js error" });
});
app.use("/user", userRouter);

app.listen(2500, () => {
  console.log("listening...");
  dbConnect();
});
