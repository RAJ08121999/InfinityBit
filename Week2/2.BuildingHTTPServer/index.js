const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req,res)=>{
    const log =  `${Date.now()}: ${req.url} New Request Received \n`;
    fs.appendFile('log.txt',log,(err,data)=>{

        switch(req.url){
            case '/':
                res.end("Hello from server Home Page");
                break
            case '/about':
                res.end("Hello from server about page");
                break
            case '/contacts':
                res.end("Hello from server contacts page");
                break
            default:
                res.end("404 Page not found");
        }
        
    });
    // console.log("new request received");
    
})

myServer.listen(8000,()=>{
    console.log("Server started successfully!")
});


// createServer() server banata hai isme ek callback function ko likhna padta hai jo ek handler hai jo batayega ki response kya dena hai jab user koi request bheje 


// server kisi port me run karta hai isiliye batana padta hai ki kis port me server listen karega aur ek call back function bhi likhte hai jo ensure karta hai ki server run hua ki nahi ye call back function likhna optional hai