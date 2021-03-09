import RolePermissions from '../infra/typeorm/entities/RolePermissions';
import ICreateRolePermissionsDTO from '../dtos/ICreateRolePermissionsDTO';

export default interface IRolesPermissionsRepository {
    create(data: ICreateRolePermissionsDTO): Promise<RolePermissions>;
    save(user: RolePermissions): Promise<RolePermissions>;
}