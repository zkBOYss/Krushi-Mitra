const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
