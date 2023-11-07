// require("dotenv").config({path:'./.env'})
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

const app = express()



;(async ()=>{
    try{
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listing on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error",error)
        throw error
    }
})()