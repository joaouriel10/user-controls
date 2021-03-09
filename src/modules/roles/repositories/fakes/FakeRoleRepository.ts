import IRolesRepository from '@modules/roles/repositories/IRolesRepository';

import ICreateRoleDTO from '@modules/roles/dtos/ICreateRoleDTO';

import Role from '@modules/roles/infra/typeorm/entities/Role';

class FakeRoleRepository implements IRolesRepository {
  private roles: Role[] = [];

  public async create({ name }: ICreateRoleDTO): Promise<Role> {
    const role = new Role();

    Object.assign(role, {id: Math.random(), name});

    this.roles.push(role);

    return role;
  }

  public async save(role: Role): Promise<Role> {
    const findIndex = this.roles.findIndex(findRole => findRole.id === role.id);

    this.roles[findIndex] = role;

    return role;
  }

  public async findRoleById(id: number): Promise<Role | undefined> {
    const role = this.roles.find(role => role.id === id);

    return role;
  }
}

export default FakeRoleRepository;
