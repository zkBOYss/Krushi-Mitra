const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db.js");
const authRouter = require("./routes/authRouter");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);

connectDb();
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
