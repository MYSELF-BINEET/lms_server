import mongoose from "mongoose";
require('dotenv').config();

const dbUrl:string=process.env.DB_URL || '';

const connectDb=async()=>{
    try{
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Connected to MongoDB: ${data.connection.host}`);
        })
    }catch(error){
        console.log(error);
        setTimeout(connectDb,5000);
    }
}

export default connectDb;