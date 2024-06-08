const mongoose=require("mongoose")
const { stringify } = require("querystring")

const userSchema=new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
    },
    email:{
        type:email,
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
const User=mongoose.model('User',userSchema);
export default User;