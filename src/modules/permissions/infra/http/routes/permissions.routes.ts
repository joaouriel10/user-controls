import { Router } from 'express';

import PermissionsController from '../controllers/PermissionsController';
const appoitmentsRouter = Router();

const permissionsController = new PermissionsController();

appoitmentsRouter.post('/', permissionsController.create);

export default appoitmentsRouter;
