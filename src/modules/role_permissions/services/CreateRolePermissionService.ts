import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import RolePermissions from '../infra/typeorm/entities/RolePermissions';

import IPermissionsRepository from '@modules/permissions/repositories/IPermissionsRepository';
import IRolesPermissionsRepository from '../repositories/IRolesPermissionsRepository';
import IRolesRepository from '@modules/roles/repositories/IRolesRepository';

interface IRequest {
  role_id: number;
  permission_id: number;
}

@injectable()
class CreateRolePermissionService {
  constructor(
    @inject('RolePermissionsReposiroty')
    private rolePermissionsReposiroty: IRolesPermissionsRepository,

    @inject('PermissionsReposiroty')
    private permissionsReposiroty: IPermissionsRepository,

    @inject('RolesReposiroty')
    private rolesReposiroty: IRolesRepository,
  ) {}

  public async execute({ role_id, permission_id }: IRequest): Promise<RolePermissions> {
    const verifyRoleExists = await this.rolesReposiroty.findRoleById(role_id);

    if (!verifyRoleExists) {
      throw new AppError('The informed role id does not exist.');
    }

    const verifyPermissionExists = await this.permissionsReposiroty.findPermissionById(permission_id);

    if (!verifyPermissionExists) {
      throw new AppError('The informed permission id does not exist.');
    }

    const rolePermission = await this.rolePermissionsReposiroty.create({ role_id: verifyRoleExists.id, permission_id: verifyPermissionExists.id });

    return rolePermission;
  }
}

export default CreateRolePermissionService;
