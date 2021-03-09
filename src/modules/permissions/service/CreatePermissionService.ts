import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Permission from '../infra/typeorm/entities/Permission';
import IPermissionsRepository from '../repositories/IPermissionsRepository';

interface IRequest {
  name: string;
  permission: Boolean;
}

@injectable()
class CreatePermissionService {
  constructor(
    @inject('PermissionsReposiroty')
    private permissionsReposiroty: IPermissionsRepository,
  ) {}

  public async execute({ name, permission }: IRequest): Promise<Permission> {
    if (!name || !permission) {
      throw new AppError('Required fields not informed');
    }

    const permissions = await this.permissionsReposiroty.create({ name, permission });

    if (!permissions) {
      throw new AppError('Error when registering a new permission');
    }

    return permissions;
  }
}

export default CreatePermissionService;
