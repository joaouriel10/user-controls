import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreatePermissionService from '@modules/permissions/service/CreatePermissionService';

export default class PermissionsController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { name, permission } = request.body;

        const createPermission = container.resolve(CreatePermissionService);

        const permissions = await createPermission.execute({
            name,
            permission,
        });

        return response.status(201).json(permissions);
    }
}