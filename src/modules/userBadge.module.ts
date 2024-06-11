import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBadge } from 'src/entities/userBadge.entity';
import { UserBadgeService } from 'src/services/userBadge.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserBadge])],
  providers: [UserBadgeService],
  exports: [UserBadgeService], // Certifique-se de exportar o UserBadgeService
})
export class UserBadgeModule {}
