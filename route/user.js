const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/Auth");
const{auth, isStudent,admin} = require("../middleware/auth");

router.post("/login", login);
router.post("/signup",signup);

//protected router 
router.get("/student", auth,isStudent, (req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for students"
    })
})
module.exports= router;    