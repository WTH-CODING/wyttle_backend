const app = require("./app");
const PORT = process.env.PORT || "3000";
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

const server = app.listen(PORT, () => {
  console.log("server started");
});
