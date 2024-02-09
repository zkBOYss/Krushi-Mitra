const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("Connected to the database");
  });
};

export default connectDb;