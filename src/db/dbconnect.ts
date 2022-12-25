import mongoose from "mongoose";

const dbConnect =async ()=> {

    try{
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("Db Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
    
}
export default dbConnect;