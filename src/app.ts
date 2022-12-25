import express,{Request,Response} from 'express';
import * as dotenv from 'dotenv';
import dbConnect from './db/dbconnect';
import homeRouter from './controller/homeController';

dotenv.config();
const PORT = process.env.PORT 

const app = express();
dbConnect();
app.get("/",homeRouter)
app.listen(PORT,():void=>{
    console.log(`http://localhost:${PORT}`);
})