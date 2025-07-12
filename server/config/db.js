const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected To MongoDB Cluster");
  } catch (error) {
    console.log("Failed to connect to MongoDB Cluster:", error.message);
  }
};

module.exports = connectDB;
