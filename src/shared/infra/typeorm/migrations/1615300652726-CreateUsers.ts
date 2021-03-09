import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1615300652726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
             new Table({
                 name: "users",
                 columns: [
                     {
                         name: 'id',
                         type: 'int',
                         isPrimary: true,
                         isGenerated: true,
                         generationStrategy: 'increment',
                     },
                     {
                         name: 'name',
                         type: 'varchar',
                     },
                     {
                         name: 'email',
                         type: 'varchar',
                         isUnique: true,
                     },
                     {
                         name: 'password',
                         type: 'varchar',
                     },
                     {
                         name: 'role_id',
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
 
         await queryRunner.createForeignKey('users', new TableForeignKey({
             name: 'RoleId',
             columnNames: ['role_id'],
             referencedColumnNames: ['id'],
             referencedTableName: 'roles',
             onDelete: 'SET NULL',
             onUpdate: 'CASCADE',
         }));
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropForeignKey('users', 'RoleId');
 
         await queryRunner.dropTable('users');
     }
 
 }
 