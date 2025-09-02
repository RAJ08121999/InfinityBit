const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

//login route handler

exports.login = async(req,res)=>{
    try{
        //fetch data
        const{email,password} = req.body;
        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully",
            });
        }
        //check the data is available in database
        let user = await User.findOne({email});
        //if not a registered user
        if(!user){
            return res.status(401).json({
                success:False,
                message:"Register yourself first",
            });
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }

        //verify password and generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            //password matched
            let token = jwt.sign(payload,
                        process.env.JWT_SECRET,{
                        expiresIn:"2h",
                        });
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            
            const options = {
                expires : new Date( Date.now()+ 3*24*60*60*1000),
                httpOnly:true,//client side pe accessible nahi hoga
            }
            //user object se password hata diye taki koi hacker dekh na paye password database se nahi hataya gaya hai

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully"
            })

        }
        else{
            //password do not match
            return res.status(403).json({
                success:false,
                message:"Password do not matched",
            });
        }
    }
    catch(error){
            console.log(error)
            return res.status(500).json({
            success:false,
            message:"Error in login",
        })
    }
}