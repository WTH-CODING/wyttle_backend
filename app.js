const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const reviewRoute = require("./routes/review");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/review", reviewRoute);

app.use("/", express.static(path.join(__dirname, "/public")));

app.get("/version", (req, res) => {
  res.send("1.0.0");
});

app.get('/*', function(req,res) {
  res.sendFile(path.resolve(__dirname+'/public/','index.html'));
});

module.exports = app;
