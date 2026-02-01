// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { InventoryModule } from '../inventory/inventory.module';
import { forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    InventoryModule,
    TypeOrmModule.forFeature([User]),

  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }