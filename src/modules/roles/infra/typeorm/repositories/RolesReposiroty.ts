import { getRepository, Repository } from 'typeorm';

import IRolesRepository from '@modules/roles/repositories/IRolesRepository';

import ICreateRoleDTO from '@modules/roles/dtos/ICreateRoleDTO';

import Role from '../entities/Role';

class RolesRepository implements IRolesRepository {
  private ormRepository: Repository<Role>;

  constructor() {
    this.ormRepository = getRepository(Role);
  }

  public async create(rolesData: ICreateRoleDTO): Promise<Role> {
    const role = this.ormRepository.create(rolesData);

    await this.ormRepository.save(role);

    return role;
  }

  public async save(role: Role): Promise<Role> {
      return this.ormRepository.save(role);
  }

  public async findRoleById(id: number): Promise<Role | undefined> {
    const role = await this.ormRepository.findOne({ where: { id } });

    return role;
  }
}

export default RolesRepository;
