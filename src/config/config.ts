import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : '12345';
const MONGO_URL = process.env.MONGO_URL;
