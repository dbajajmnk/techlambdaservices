import { Request,Response} from "express";

const homeController=(req:Request,res:Response):void=>{
    res.send("hello Friends");
};
export default homeController;