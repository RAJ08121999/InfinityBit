// const http = require("http");

const express = require("express");

const app = express();
// app internally handler function hi hai

app.get('/',(req,res)=>{
    return res.send("hello from home page");
});

app.get('/about',(req,res)=>{
    return res.send("hello u r in about page");
});

// const myServer = http.createServer(app)

// myServer.listen(8000, ()=>{
//     console.log("server started successfully");
// });

app.listen(8000,()=>{
    console.log("server started successfully");
});