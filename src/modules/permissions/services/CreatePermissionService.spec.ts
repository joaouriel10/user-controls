import AppError from '@shared/errors/AppError';

import FakePermissionRepository from '../repositories/fakes/FakePermissionRepository';

import CreatePermissionService from './CreatePermissionService';

let fakePermissionRepository: FakePermissionRepository;
let createPermission: CreatePermissionService;

describe('CreatePermissionService', () => {
    beforeEach(() => {
        fakePermissionRepository = new FakePermissionRepository();
        createPermission = new CreatePermissionService(fakePermissionRepository);
    });

    it('should be able to  create a new permission', async () => {
        const permission = await createPermission.execute({ name: "Create", permission: true });

        expect(permission).toHaveProperty('id');
        expect(permission.name).toBe('Create');
        expect(permission.permission).toBe(true);
    });

   it('should not be able to create two appointments on the same time', async () => {
        await expect(
          createPermission.execute({ name: "", permission: false })
        ).rejects.toBeInstanceOf(AppError)
    }) 
});
