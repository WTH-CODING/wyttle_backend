const express = require("express");
const app = express();

// const auth = require("./routes/auth");

// app.use("/api/v1/", auth);



app.get("/", (req, res) => {
    res.send("baba boi");
  });
module.exports = app;
