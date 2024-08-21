const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./routes/user.route");
const cors = require("cors");
const blog = require("./routes/blog.route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/blogs", blog);

app.listen("2005", () => {
  console.log("Listening");
  dbConnect();
});
