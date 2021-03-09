import AppError from '@shared/errors/AppError';

import FakeRolesPermissionsRepository from '../repositories/fakes/FakeRolesPermissionsRepository';
import FakePermissionRepository from '@modules/permissions/repositories/fakes/FakePermissionRepository';
import FakeRoleRepository from '@modules/roles/repositories/fakes/FakeRoleRepository';

import CreateRolePermissionService from './CreateRolePermissionService';

let fakeRolesPermissionsRepository: FakeRolesPermissionsRepository;
let fakePermissionRepository: FakePermissionRepository;
let fakeRoleRepository: FakeRoleRepository;
let createRolePermissionService: CreateRolePermissionService;

describe('CreatePermissionService', () => {
    beforeEach(() => {
      fakeRolesPermissionsRepository = new FakeRolesPermissionsRepository();
      fakePermissionRepository = new FakePermissionRepository();
      fakeRoleRepository = new FakeRoleRepository();
      createRolePermissionService = new CreateRolePermissionService(fakeRolesPermissionsRepository, fakePermissionRepository, fakeRoleRepository);
    });

    it('should be able to create a new role permission', async () => {
        const permission = await fakePermissionRepository.create({ name: "Create", permission: true });

        const role = await fakeRoleRepository.create({ name: "Admin" });

        const RolePermission = await createRolePermissionService.execute({ role_id: role.id, permission_id: permission.id });

        expect(RolePermission.role_id).toBe(role.id);
        expect(RolePermission.permission_id).toBe(permission.id);
    });

    it('should not be able to create a new role without entering a valid permission id', async () => {
      const role = await fakeRoleRepository.create({ name: "Admin" });

      await expect(
        createRolePermissionService.execute({ role_id: role.id , permission_id: 1 })
      ).rejects.toBeInstanceOf(AppError)
    });

    it('should not be able to create a new role without entering a valid role id', async () => {
      const permission = await fakePermissionRepository.create({ name: "Create", permission: true });

      await expect(
        createRolePermissionService.execute({ role_id: 1, permission_id: permission.id })
      ).rejects.toBeInstanceOf(AppError)
    });
});
