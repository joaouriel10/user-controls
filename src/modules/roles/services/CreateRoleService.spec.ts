import AppError from '@shared/errors/AppError';

import FakeRoleRepository from '../repositories/fakes/FakeRoleRepository';

import CreateRoleService from './CreateRoleService';

let fakeRoleRepository: FakeRoleRepository;
let createRole: CreateRoleService;

describe('CreateRoleService', () => {
    beforeEach(() => {
        fakeRoleRepository = new FakeRoleRepository();
        createRole = new CreateRoleService(fakeRoleRepository);
    });

    it('should be able to  create a new role', async () => {
        const role = await createRole.execute({ name: "Admin" });

        expect(role).toHaveProperty('id');
        expect(role.name).toBe('Admin');
    });

    it('should not be able to create a new role without entering the name', async () => {
        await expect(
            createRole.execute({ name: "" })
        ).rejects.toBeInstanceOf(AppError)
    })
});
