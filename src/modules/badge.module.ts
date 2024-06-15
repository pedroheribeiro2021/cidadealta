import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBadgeModule } from './userBadge.module'; // Importe o UserBadgeModule
import { BadgeController } from 'src/controllers/badge.controller';
import { Badge } from 'src/entities/badge.entity';
import { BadgeService } from 'src/services/badge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Badge]), UserBadgeModule], // Inclua o UserBadgeModule nos imports
  controllers: [BadgeController],
  providers: [BadgeService],
  exports: [BadgeService],
})
export class BadgeModule {}
