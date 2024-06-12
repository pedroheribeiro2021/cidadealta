import { Controller, Get, Param } from '@nestjs/common';
import { UserBadgeService } from 'src/services/userBadge.service';

@Controller('user-badges')
export class UserBadgeController {
  constructor(private readonly userBadgeService: UserBadgeService) {}

  @Get('user/:userId')
  async findBadgesByUserId(@Param('userId') userId: number) {
    return this.userBadgeService.findBadgesByUserId(userId);
  }
}
