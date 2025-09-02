const express = require("express");
const router = express.Router();
const User = require("../model/User");

const { login,signup } = require("../controller/Auth");
const {auth, isStudent, isAdmin } = require("../middlewares/Auth");

router.post("/login",login);
router.post("/signup",signup);

//Protected route || role k hisab se routes allow karna
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for test"
    });
})
router.get("/student",auth , isStudent, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome students"
    });
})

router.get("/admin", auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome Admin"
    });
});

// router.get("/getEmail",auth,async(req,res)=>{
//     try{
//         const id = req.user.id;
//         const user = await User.findById({id})
//         res.status(200).json({
//             success:true,
//             user:user,
//             message:"Welcome to the email route",
//         })
//     }catch(error){
//         res.status(500).json({
//             success:false,
//             error:error.message,
//             message:"facing errors",
//         })
//     }
    
// });

module.exports = router;