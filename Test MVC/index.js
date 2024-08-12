const express = require("express");
const dbConnect = require("./config/db");
const taskRouter = require("./routes/task.route");
const task = require("./models/task.Schema");
const isValid = require("./middlewares/validate");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(3000, () => {
  console.log("Listening...");
  dbConnect();
});
