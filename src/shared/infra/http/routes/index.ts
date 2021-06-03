import { Router } from 'express';

import CreateUserControler from '@modules/users/infra/http/CreateUserControler';

const router = Router();

const createUserControler = new CreateUserControler();

router.post('/', createUserControler.execute);

export default router;