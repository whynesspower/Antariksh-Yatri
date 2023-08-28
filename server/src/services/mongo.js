const mongoose = require("mongoose");

require("dotenv").config();

// this is the URl for the mongo atlas
// database URL
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});
