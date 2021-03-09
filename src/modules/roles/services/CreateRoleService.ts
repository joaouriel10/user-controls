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
    private rolesRepository: IRolesRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Role> {
    if (!name) {
      throw new AppError('Required fields not informed');
    }

    const roles = await this.rolesRepository.create({ name });

    return roles;
  }
}

export default CreateRoleService;
