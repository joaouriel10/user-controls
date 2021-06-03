import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<ICreateUserDTO>;
}