const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db.js");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

connectDb();
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
