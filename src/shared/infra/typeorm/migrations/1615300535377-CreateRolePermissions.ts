import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRolePermissions1615300535377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "role_permissions",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'role_id',
                        type: 'int',
                    },
                    {
                        name: 'permission_id',
                        type: 'int',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            }),
        );

        await queryRunner.createForeignKey('role_permissions', new TableForeignKey({
            name: 'RoleId',
            columnNames: ['role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'roles',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createForeignKey('role_permissions', new TableForeignKey({
            name: 'PermissionId',
            columnNames: ['permission_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'permissions',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('role_permissions', 'PermissionId');
        await queryRunner.dropForeignKey('role_permissions', 'RoleId');

        await queryRunner.dropTable('role_permissions');
    }
}
