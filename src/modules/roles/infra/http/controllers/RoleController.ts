import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateRoleService from '@modules/roles/service/CreateRoleService';

export default class RoleController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { name } = request.body;

        const createRole = container.resolve(CreateRoleService);

        const role = await createRole.execute({ name });

        if (!role) {
            return response.status(400).json({ status: 'error', message: 'Error when registering a new role.'});
        }

        return response.status(201).json(role);
    }
}