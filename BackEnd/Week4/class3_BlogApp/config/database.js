const mongoose = require("mongoose");
require("dotenv").config();


const dbConnection =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("database connected successfully"))
    .catch( (error)=>{
        console.log("Database connection failed");
        console.log(error);
        process.exit(1);
    })
};

module.exports = dbConnection;