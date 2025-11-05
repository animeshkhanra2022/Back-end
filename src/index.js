import connectDB from "./db/index.js" 
import dotenv from "dotenv"
import {app} from "./app.js"


dotenv.config({
    path: '/custom/path/to/.env'
})

connectDB()
.then(() => {

    app.on("Error", (error) => {
        console.log("Error::", error);
        throw error;
    })


    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port http://localhost:${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("MongoDB connection failed:: error", error)
})