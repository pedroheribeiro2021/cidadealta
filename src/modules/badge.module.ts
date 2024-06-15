import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBadgeModule } from './userBadge.module';
import { BadgeController } from 'src/controllers/badge.controller';
import { Badge } from 'src/entities/badge.entity';
import { BadgeService } from 'src/services/badge.service';

@Module({
  imports: [TypeOrmModule.forFeature([Badge]), UserBadgeModule],
  controllers: [BadgeController],
  providers: [BadgeService],
  exports: [BadgeService],
})
export class BadgeModule {}
