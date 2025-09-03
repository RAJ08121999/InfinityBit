const { json } = require("express");
const File = require("../models/File");

//localFileUpload -> handler function

exports.localFileUpload = async(req , res ) => {
    try{
        //fetch the file from request 
        const file = req.files.file;
        console.log("file aa gya",file);

        //create path where file needs to be stored on server
        let path = __dirname + "/files" + Date.now() + `.${file.name.split('.')[1]}`;
        //__dirname matlab current directory ; to jo bhi file upload hoga wo current directory me files folder me current date ka nam se save ho jayega aur uska extension file object me name key ko split karke first index se le lemge
        console.log("ye dekho path",path);

        //add path to the move function
        file.mv(path, (err)=>{
            console.log(err)
        });
        
        //create a successfull response
        res.json({
            success:true,
            message:"local file upload successfully"
        })
    }catch(error){
        console.log(error);
    }
}