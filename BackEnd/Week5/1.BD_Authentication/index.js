const express = require ("express");

const app = express();

require ('dotenv').config();
const PORT = process.env.PORT || 4000


//adding middleware for parsing
app.use(express.json());


require("./config/database").connect();


//import route and mount

const user = require("./routes/user");
app.use("/api/v1",user)


app.listen(PORT,()=>{
    console.log(`App is running in port ${PORT}`);
})