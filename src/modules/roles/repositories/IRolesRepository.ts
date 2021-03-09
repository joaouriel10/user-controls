import Role from '../infra/typeorm/entities/Role';
import ICreateRoleDTO from '../dtos/ICreateRoleDTO';

export default interface IRolesRepository {
    create(data: ICreateRoleDTO): Promise<Role>;
    save(user: Role): Promise<Role>;
}