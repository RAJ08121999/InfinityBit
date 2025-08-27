const mongoose = require("mongoose");
require("dotenv").config();


const dbConnection = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Database connection successful"))
    .catch((err)=>{
        console.log("database connection fail");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnection;