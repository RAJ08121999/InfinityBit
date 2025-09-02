const jwt = require("jsonwebtoken");
require("dotenv").config();

//Authentication -> Identity verification

exports.auth = (req,res,next)=>{
    try{
        //extract jwt token
        //we can extract token from header, cookie, or body
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
        //bearer k bad ek space intentionally rakha gaya hai ye syntax hai
        //header se token nikalne ka process sabse jyada secure hai

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            });
        }
        //varify the token
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode;
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Invalid token",
            })
        }
        next();//move to the next middleware
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while varifying the token",
        })
    }
}

//Authorization -> giving roles

//student middleware

exports.isStudent = (req , res,next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a proctected route for students"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Only Students are allowed in this route",
        })
    }
}

//admin middleware

exports.isAdmin = (req , res,next) =>{
    try{
        if(req.user.role!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a proctected route for Admins"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Only Admins are allowed in this route",
        })
    }
}