const express = require("express");
const dbConnect = require("./config/DB");
const { getUser, createUser } = require("./controllers/userController");
const userRouter = require("./routes/userRoute");
const user = require("./models/userchema");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", userRouter);

// app.post("/", userRouter);

// app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("Listening");
  dbConnect();
});
