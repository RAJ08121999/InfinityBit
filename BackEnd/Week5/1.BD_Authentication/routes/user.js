const express = require("express");
const router = express.Router();

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
})

module.exports = router;