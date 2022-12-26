import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import dbConnect from './db/dbconnect';
import homeRouter from './routers/homeRouter';
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL: string = process.env.MONGO_URL || '';
const app = express();
dbConnect(MONGO_URL);
app.get('/', homeRouter);
app.listen(PORT, (): void => {
    console.log(`http://localhost:${PORT}`);
});
