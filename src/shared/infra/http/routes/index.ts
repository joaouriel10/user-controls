import { Router } from 'express';

import roleRouter from '@modules/roles/infra/http/routes/roles.routes';
import permissionRouter from '@modules/permissions/infra/http/routes/permissions.routes';

const routes = Router();

routes.use('/roles', roleRouter);
routes.use('/permissions', permissionRouter);

export default routes;
