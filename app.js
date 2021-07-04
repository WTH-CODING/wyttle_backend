const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "server/config/config.env" });

const auth = require("./routes/auth");

app.use("/api/v1/", auth);
module.exports = app;
