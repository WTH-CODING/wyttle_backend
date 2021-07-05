const express = require("express");
const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/order", orderRoute);
app.get("/", (req, res) => {
  res.send("baba boi");
});

module.exports = app;
