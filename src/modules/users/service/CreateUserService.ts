import AppError from '@shared/errors/AppError';
import { producer } from '@shared/infra/kafka';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<void> {
    const user = { name: name, email: email, password};

    if (!user) {
        throw new AppError('Favor enviar todos os campos');
    }
    
    await producer.send({
        topic: 'creteUser',
        messages: [{ value: JSON.stringify(user) }]
    });
  }
}

export default CreateUserService;
