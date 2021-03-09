import { getRepository, Repository } from 'typeorm';

import IPermissionsRepository from '@modules/permissions/repositories/IPermissionsRepository';

import ICreatePermissionDTO from '@modules/permissions/dtos/ICreatePermissionDTO';

import Permission from '../entities/Permission';

class PermissionsRepository implements IPermissionsRepository {
  private ormRepository: Repository<Permission>;

  constructor() {
    this.ormRepository = getRepository(Permission);
  }

  public async create(permissionData: ICreatePermissionDTO): Promise<Permission> {
    const permission = this.ormRepository.create(permissionData);

    await this.ormRepository.save(permission);

    return permission;
  }

  public async save(permission: Permission): Promise<Permission> {
      return this.ormRepository.save(permission);
  }
}

export default PermissionsRepository;
