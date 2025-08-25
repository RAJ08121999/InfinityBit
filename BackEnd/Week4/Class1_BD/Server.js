// step1-> create a folder
// step2-> move to that folder
// step3-> run command npm init -y to get package.json file
// step4-> open the folder using vs code
// step5-> run the command npm i express to get the node modules package.
// step6-> create a js file named server.js 


// server instantiate
const express = require ('express');
const app = express();

//used to parse req.body in express specially in put or post methods
const bodyParser = require('body-parser');
//specifically parse json data and add it to the req.body object
app.use(bodyParser.json());


//activate the server on a specified port
app.listen(3000, ()=>{
    console.log("server started at port 3000");
})

//creating routes
app.get('/',(req,res)=>{
    res.send("hello jee")
})

app.post('/api/bullet',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car data submitted");
})

const mongoose = require('mongoose');
mongoose.connect('monogdb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection successful"))
.catch((err)=>{console.log("error in connecting to db")});