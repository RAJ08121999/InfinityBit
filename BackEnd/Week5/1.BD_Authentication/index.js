const express = require ("express");

const app = express();

require ('dotenv').config();
const PORT = process.env.PORT || 4000

//cookie - Parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//adding middleware for parsing -> body parser
app.use(express.json());


require("./config/database").connect();


//import route and mount

const user = require("./routes/user");
app.use("/api/v1",user)


app.listen(PORT,()=>{
    console.log(`App is running in port ${PORT}`);
})