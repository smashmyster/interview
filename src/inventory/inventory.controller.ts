import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { AuthGuard } from '../auth/auth/auth.guard';
import { User } from '../auth/user.decorator';

@Controller('inventory')
@UseGuards(AuthGuard)
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Post()
    async createItem(
        @Body('itemName') itemName: string,
        @User() user: any,
    ) {
        return this.inventoryService.createInventoryItem(itemName, user.sub);
    }

    @Get()
    async getItems(@User() user: any) {
        return this.inventoryService.getInventoryForUser(user.sub);
    }
}
