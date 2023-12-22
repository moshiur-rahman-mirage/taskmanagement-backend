require("dotenv").config();
const http=require('http')
const app=require('./src/app.js');
const dbConnect = require("./src/db/dbConnect.js");
const server=http.createServer(app)

const port=5000;

const main= async ()=>{
   await dbConnect();
   server.listen(port,()=>{
    console.log('Task server is running on port',port)
   })
}

main();