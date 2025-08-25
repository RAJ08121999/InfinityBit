const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req,res)=>{

    const myUrl = url.parse(req.url, true);

    const log = `${Date.now()}: request method is ${req.method} New request received at ${req.url}\n`;
    
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                if(req.method==="GET")
                    res.end("Home page");
                break;
            case "/about":
                res.end("this is about page");
                break;
            case "/signup":
                if(req.method==="POST")
                    res.end("Post request received");
                else
                    res.end("Only POST allowed on this route");
                break;
            default:
                res.end("this page is not available");

        }
    })
})

myServer.listen(8000,()=>{
    console.log("Server started");
})