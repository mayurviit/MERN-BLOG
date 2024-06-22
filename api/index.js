const express = require("express");
const mongoose =require("mongoose")
const app=express();
const dotenv=require("dotenv")

const userRoutes =require("./routes/user.route.js");
const authRoutes=require("./routes/auth.route.js");
const postRoutes=require('./routes/post.route.js');
const cookieParser = require("cookie-parser");
// dotenv.config();



const uri = process.env.MONGODB_URL;
// const mongoose = require('mongoose');
// const db = 'mongodb+srv://david:<password>@cluster0-re3gq.mongodb.net/test?retryWrites=true'
mongoose.connect(uri, {
    useNewUrlParser: true,
   
})
.then(() => console.log("DB Connected Successfully"))
.catch( (error) => {
    console.log("DB Connection Failed");
    console.error(error);
    process.exit(1);
} )

app.use(express.json());
app.use(cookieParser());
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
