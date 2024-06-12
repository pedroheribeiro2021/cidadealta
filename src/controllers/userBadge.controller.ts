import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UserBadgeService } from 'src/services/userBadge.service';

@Controller('user-badges')
export class UserBadgeController {
  constructor(private readonly userBadgeService: UserBadgeService) {}

  @Get(':userId')
  async findAllByUser(@Param('userId') userId: number) {
    const userBadges = await this.userBadgeService.findByUserId(userId);
    if (!userBadges) {
      throw new NotFoundException('User or badges not found');
    }
    return userBadges;
  }
}
