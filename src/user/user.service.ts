// src/user/user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InventoryService } from '../inventory/inventory.service';
import { forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(username: string): Promise<User> {
        const user = this.userRepository.create({ username });
        return this.userRepository.save(user);
    }

    async findOneByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { username } });
    }

    async findOneById(id: number): Promise<User | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    getUserProfile() {
        return 'User Profile';
    }
}