import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { UserModule } from '../user/user.module';
import { forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './inventory.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Inventory]),
    AuthModule,
  ],
  controllers: [InventoryController],
})
export class InventoryModule { } 