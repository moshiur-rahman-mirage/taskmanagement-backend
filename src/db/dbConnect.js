const mongoose = require("mongoose");
require("dotenv").config();


const dbConnect = async () => {
  console.log("connectting to database");
  const mongoURI = process.env.CONNECTION_STRING

  await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
  console.log("connected to database");
};


module.exports= dbConnect