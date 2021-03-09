import { container } from 'tsyringe';

import IPermissionsRepository from '@modules/permissions/repositories/IPermissionsRepository';
import PermissionsReposiroty from '@modules/permissions/infra/typeorm/repositories/PermissionsReposiroty';

import IRolesRepository from '@modules/roles/repositories/IRolesRepository';
import RolesReposiroty from '@modules/roles/infra/typeorm/repositories/RolesReposiroty';

import IRolesPermissionsRepository from '@modules/role_permissions/repositories/IRolesPermissionsRepository';
import RolePermissionsReposiroty from '@modules/role_permissions/infra/typeorm/repositories/RolePermissionsReposiroty';


container.registerSingleton<IPermissionsRepository>(
    'PermissionsReposiroty', PermissionsReposiroty,
);

container.registerSingleton<IRolesRepository>(
    'RolesReposiroty', RolesReposiroty,
);

container.registerSingleton<IRolesPermissionsRepository>(
    'RolePermissionsReposiroty', RolePermissionsReposiroty,
);
