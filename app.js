const express = require("express");
const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
    res.send("baba boi");
  });

module.exports = app;
