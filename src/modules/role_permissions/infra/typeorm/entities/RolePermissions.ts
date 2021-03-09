import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('role_permissions')
class RolePermissions {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    role_id: number;

    @Column()
    permission_id: number;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}

export default RolePermissions;