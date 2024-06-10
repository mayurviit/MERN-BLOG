const mongoose=require("mongoose")
const { stringify } = require("querystring")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }, 
    password:{
        type:String,
        required:true,
    },
},
{timestamp:true}
);
module.exports=mongoose.model('User',userSchema);

