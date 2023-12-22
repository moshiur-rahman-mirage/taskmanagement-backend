// import packages
const express = require('express');
const applyMiddleware = require('./middleware/applyMiddleware');

const app=express();
app.use(express.json());
require("dotenv").config();
applyMiddleware(app);


app.get("/health", (req, res) => {
    res.send("is running....");
  });

module.exports=app