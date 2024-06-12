import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBadge } from 'src/entities/userBadge.entity';
import { UserBadgeService } from 'src/services/userBadge.service';
import { UserBadgeController } from 'src/controllers/userBadge.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserBadge])],
  providers: [UserBadgeService],
  controllers: [UserBadgeController],
  exports: [UserBadgeService],
})
export class UserBadgeModule {}
