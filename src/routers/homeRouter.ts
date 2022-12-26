import { Router } from 'express';
import homeController from '../controllers/homeController';
const homeRouter = Router();
homeRouter.get('/', homeController);
export default homeRouter;
