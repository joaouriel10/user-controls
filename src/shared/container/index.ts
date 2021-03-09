import { container } from 'tsyringe';

import IPermissionsRepository from '@modules/permissions/repositories/IPermissionsRepository';
import PermissionsReposiroty from '@modules/permissions/infra/typeorm/repositories/PermissionsReposiroty';

import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import RolesReposiroty from '@modules/roles/infra/typeorm/repositories/RolesReposiroty';


container.registerSingleton<IPermissionsRepository>(
    'PermissionsReposiroty', PermissionsReposiroty,
);

container.registerSingleton<IRolesRepository>(
    'RolesReposiroty', RolesReposiroty,
);
