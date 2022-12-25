import express,{Request,Response} from 'express';
import * as dotenv from 'dotenv';
import dbConnect from './db/dbconnect';

dotenv.config();
const PORT = process.env.PORT 

const app = express();
dbConnect();
app.get("/",(req:Request,res:Response):void=>{
    res.send("hello Friends");
})
app.listen(PORT,():void=>{
    console.log(`http://localhost:${PORT}`);
})