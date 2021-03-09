import { Router } from 'express';

import RoleController from '../controllers/RoleController';
const roulesRouter = Router();

const roleController = new RoleController();

roulesRouter.post('/', roleController.create);

export default roulesRouter;
