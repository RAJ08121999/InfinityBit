const bcrypt = require("bcrypt");
const User = require("../model/User");

//signup route handler

exports.signup = async(req , res)=>{
    try{
        //get all data from req body
        const {name,email,password,role} = req.body;

        //check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            });
        }

        //secure the password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(error){
            return res.status(400).json({
                success:false,
                message:"Error in hashing the password",
            })
        }

        //create entry for user
        const user = await User.create({
            name,email,password:hashedPassword,role
        })
        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });

    }
    catch(err){
        console.error(err);
        return res.status(400).json({
            success:false,
            message:"User cannot be created please try again !!!"
        });
        
    }
}