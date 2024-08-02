const express = require("express");
const dbConnect = require("./config/db");
const productRouter = require("./routes/Product.route");
const product = require("./models/product.schema");

const app = express();
app.use(express.json());
app.get("/", productRouter);

app.post("/", productRouter);

app.delete("/:id", productRouter);

app.patch("/:id", productRouter);

app.use("/product", productRouter);
app.listen(2001, () => {
  console.log("Listening...");
  dbConnect();
});
