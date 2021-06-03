import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateUserService from '@modules/users/service/CreateUserService';

export default class PermissionsController {
    public async execute(request: Request, response: Response): Promise<Response>{
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        await createUser.execute({ name, email, password });

        return response.status(201).json({ success: true, message: 'Usuario enviado para cadastro no kafka' });
    }
}