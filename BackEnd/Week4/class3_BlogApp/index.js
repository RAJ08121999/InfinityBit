const express = require("express")
const app=express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")

//mount
app.use("/api/v1",blog);

//establish db connection
const dbConnection = require("./config/database");
dbConnection();

//starting the server
app.listen(PORT,()=>{
    console.log(`app is running in port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>this is homepage</h1>`)
})