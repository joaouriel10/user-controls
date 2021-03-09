import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Role from '../infra/typeorm/entities/Role';
import IRolesRepository from '../repositories/IRolesRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateRoleService {
  constructor(
    @inject('RolesReposiroty')
    private rolesReposiroty: IRolesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Role> {
    if (!name) {
      throw new AppError('Required fields not informed');
    }

    const permissions = await this.rolesReposiroty.create({ name });

    if (!permissions) {
      throw new AppError('Error when registering a new role');
    }

    return permissions;
  }
}

export default CreateRoleService;
