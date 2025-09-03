const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

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
        console.log("not able to upload the file into server");
        console.log(error);
    }
}

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const options = {folder};
    console.log("temp file path ->",file.tempFilePath);

    if(quality){
        options.quality=quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

//image upload handler
exports.imageUpload = async(req , res) =>{
    try{
        //data fetch
        const {name,email,tags} = req.body;
        console.log(name,email,tags);

        const file = req.files.imageFiles;
        console.log(file);

        //validation
        const supportedTypes = ["jpeg","jpg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported",
            });
        }

        //when file format supported
        const response = await uploadFileToCloudinary(file,"imageStore");//imageStore folder cloudinary me banaya gaya hai
        console.log(response);

        // database me entry save karna hai
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded into cloudinary imageStore folder"
        })
    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
}

//video upload handler

exports.videoUpload = async(req,res)=>{
    try{

        //data fetch
        const {name , email , tags } = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;

        //validation
        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported",
            });
        }

        //when file format supported
        const response = await uploadFileToCloudinary(file,"imageStore");//imageStore folder cloudinary me banaya gaya hai
        console.log(response);

        // database me entry save karna hai
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        
        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"video successfully uploaded into cloudinary imageStore folder"
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        });
    }
}

//image reducer upload handler
exports.imageReducerUpload = async(req,res)=>{
    try{
        //data fetch
        const {name,email,tags} = req.body;
        console.log(name,email,tags);

        const file = req.files.imageFiles;
        console.log(file);

        //validation
        const supportedTypes = ["jpeg","jpg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported",
            });
        }

        //when file format supported
        const response = await uploadFileToCloudinary(file,"imageStore",30);//imageStore folder cloudinary me banaya gaya hai
        console.log(response);

        // database me entry save karna hai
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image successfully uploaded into cloudinary imageStore folder"
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        });
    }
}