const express = require("express");
const mongoose =require("mongoose")
const app=express();
const dotenv=require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO) 
        .then(() =>{ console.log("DB Connected Successfully")})
        .catch( (error) => {
//         console.log("DB Connection Failed");
          console.error(error);
//         process.exit(1);
    } )

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})



