import IRolesPermissionsRepository from '@modules/role_permissions/repositories/IRolesPermissionsRepository';

import ICreateRolePermissionsDTO from '@modules/role_permissions/dtos/ICreateRolePermissionsDTO';

import RolePermissions from '@modules/role_permissions/infra/typeorm/entities/RolePermissions';

class FakeRolesPermissionsRepository implements IRolesPermissionsRepository {
  private rolePermissions: RolePermissions[] = [];

  public async create({ role_id, permission_id }: ICreateRolePermissionsDTO): Promise<RolePermissions> {
    const rolePermission = new RolePermissions();

    Object.assign(rolePermission, {id: Math.random(), role_id, permission_id});

    this.rolePermissions.push(rolePermission);

    return rolePermission;
  }

  public async save(rolePermission: RolePermissions): Promise<RolePermissions> {
    const findIndex = this.rolePermissions.findIndex(findRolePermission => findRolePermission.id === rolePermission.id);

    this.rolePermissions[findIndex] = rolePermission;

    return rolePermission;
  }
}

export default FakeRolesPermissionsRepository;
