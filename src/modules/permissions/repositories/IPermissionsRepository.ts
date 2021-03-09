import Permission from '../infra/typeorm/entities/Permission';
import ICreatePermissionDTO from '../dtos/ICreatePermissionDTO';

export default interface IPermissionsRepository {
    create(data: ICreatePermissionDTO): Promise<Permission>;
    save(user: Permission): Promise<Permission>;
    findPermissionById(id: number): Promise<Permission | undefined>;
}