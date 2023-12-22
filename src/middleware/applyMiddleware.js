const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const { LOCAL_CLIENT,PRODUCTION_CLIENT } = require("../config/default");

const applyMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        LOCAL_CLIENT,
        PRODUCTION_CLIENT,
        "*"

    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = applyMiddleware