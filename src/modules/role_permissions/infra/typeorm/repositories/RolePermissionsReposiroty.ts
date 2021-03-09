import { getRepository, Repository } from 'typeorm';

import IRolesPermissionsRepository from '@modules/role_permissions/repositories/IRolesPermissionsRepository';

import ICreateRolePermissionsDTO from '@modules/role_permissions/dtos/ICreateRolePermissionsDTO';

import RolePermissions from '../entities/RolePermissions';

class RolePermissionsReposiroty implements IRolesPermissionsRepository {
  private ormRepository: Repository<RolePermissions>;

  constructor() {
    this.ormRepository = getRepository(RolePermissions);
  }

  public async create(rolesData: ICreateRolePermissionsDTO): Promise<RolePermissions> {
    const role = this.ormRepository.create(rolesData);

    await this.ormRepository.save(role);

    return role;
  }

  public async save(role: RolePermissions): Promise<RolePermissions> {
      return this.ormRepository.save(role);
  }
}

export default RolePermissionsReposiroty;
