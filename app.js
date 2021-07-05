const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("baba boi");
});

app.get("/version", (req, res) => {
  res.send("1.0.0");
});

module.exports = app;
