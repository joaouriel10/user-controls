import IPermissionsRepository from '@modules/permissions/repositories/IPermissionsRepository';

import ICreatePermissionDTO from '@modules/permissions/dtos/ICreatePermissionDTO';

import Permission from '@modules/permissions/infra/typeorm/entities/Permission';

class FakePermissionRepository implements IPermissionsRepository {
  private permission: Permission[] = [];

  public async create({ name, permission }: ICreatePermissionDTO): Promise<Permission> {
    const newPermission = new Permission();

    Object.assign(newPermission, {id: Math.random(), name, permission});

    this.permission.push(newPermission);

    return newPermission;
  }

  public async save(permission: Permission): Promise<Permission> {
    const findIndex = this.permission.findIndex(findPermission => findPermission.id === permission.id);

    this.permission[findIndex] = permission;

    return permission;
  }

  public async findPermissionById(id: number): Promise<Permission | undefined> {
    const permission = this.permission.find(permission => permission.id === id);

    return permission;
  }
}

export default FakePermissionRepository;
