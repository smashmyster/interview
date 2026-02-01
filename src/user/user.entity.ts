// src/user/user.entity.ts
import { Inventory } from 'src/inventory/inventory.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToMany(() => Inventory, (inventory) => inventory.user)
    inventory: Inventory[];
}