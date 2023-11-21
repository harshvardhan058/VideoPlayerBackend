import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
import connectDB from "./db/index.js";
import { app } from "./app.js";

app.on("error",(error)=>{
    console.log("Error",error)
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`⚙️ Server is running on port ${process.env.PORT}`)
        console.log(`App is runnign on process is ${process.pid}`)
    })
})
.catch((error)=>{
    console.log(`Database Connection Failed !! ${error}`)
})







// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         .then(()=>{
//             console.log("Database Connected")
//             console.log(`process id of the currently executing program is ${process.pid}`)
//         }).catch((error)=>{
//             console.log("Error while connecting the database",error)
//         })
//         app.on("error",(error)=>{
//             console.log("Error",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listing on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("Error",error)
//         throw error
//     }
// })()