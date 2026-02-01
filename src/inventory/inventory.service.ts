import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable()
export class InventoryService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        @InjectRepository(Inventory)
        private readonly inventoryRepository: Repository<Inventory>,
    ) { }

    async createInventoryItem(itemName: string, userId: number): Promise<Inventory> {
        const user = await this.userService.findOneById(userId);
        if (!user) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        const item = this.inventoryRepository.create({
            itemName,
            user,
        });

        return this.inventoryRepository.save(item);
    }
    //TODO: Implement getInventory using your userid 
    async getInventoryForUser(userId: number): Promise<Inventory[]> {
        return []
    }
}