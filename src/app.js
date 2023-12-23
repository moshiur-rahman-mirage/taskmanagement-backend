// import packages
const express = require('express');
const applyMiddleware = require('./middleware/applyMiddleware');
const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter');
const app=express();
app.use(express.json());
require("dotenv").config();
applyMiddleware(app);


app.get("/health", (req, res) => {
    res.send("is running....");
  });

  app.use('/users',userRouter);
  app.use('/tasks',taskRouter);

module.exports=app