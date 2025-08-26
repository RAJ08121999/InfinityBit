const express = require("express");

const app = express();

//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse request body
app.use(express.json());


//import routes for todo api

const todoRoutes = require("./routes/todo");

//mount the todo api routes
app.use("api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});

//data base connection 

const dbConnection = require("./config/database");
dbConnection();

//default route

app.get("/",(req,res)=>{
    res.send(`<h1>this is homepage</h1>`);
})