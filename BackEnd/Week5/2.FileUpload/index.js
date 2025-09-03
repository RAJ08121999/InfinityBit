//create app
const express  = require("express");
const app = express();

//find port
require("dotenv").config();
const PORT = process.env.PORT || 4000

//add middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));//fileupload() server pe files upload karta hai

//connect with db
const db = require("./config/database");
db.connect();

//connect with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//route and mount api
const Upload =  require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);

//acticate the server
app.listen(PORT,()=>{
    console.log(`App is running in the port ${PORT}`);
})