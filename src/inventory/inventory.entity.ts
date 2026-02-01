// src/inventory/inventory.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    itemName: string;

    @ManyToOne(() => User, (user) => user.inventory)
    user: User;
}