const User=require("../models/user.model.js")
const bcryptjs =require("bcryptjs")
exports.signup=async (req,res)=>{
    const {username,email,password}=req.body;

    if(!username ||  !email || !password || username==='' || email==='' || password===''){
        return res.status(400).json({message:"All fields are required"});

    }
    const hashPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({
        username,
        email,
        password:hashPassword,
    });
    try{
        await newUser.save();
    
        res.json({message:"sucess"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
   
}
