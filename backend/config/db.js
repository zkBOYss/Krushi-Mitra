const mongoose = require("mongoose");
const dotevn = require("dotenv");
dotevn.config();
const connectDb = () => {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to the database");
  });
};

module.exports = connectDb;
