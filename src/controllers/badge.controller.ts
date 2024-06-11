import {
  Controller,
  Get,
  //   Post,
  //   Param,
  //   Body,
  //   NotFoundException,
  //   BadRequestException,
} from '@nestjs/common';
import { BadgeService } from 'src/services/badge.service';
import { UserBadgeService } from 'src/services/userBadge.service';

@Controller('badges')
export class BadgeController {
  constructor(
    private readonly badgeService: BadgeService,
    private readonly userBadgeService: UserBadgeService,
  ) {}

  @Get()
  async findAll() {
    console.log('controller ok');
    return this.badgeService.findAll();
  }

  //   @Post(':slug/redeem')
  //   async redeemBadge(
  //     @Param('slug') slug: string,
  //     @Body() createUserBadgeDto: CreateUserBadgeDto,
  //   ) {
  //     const badge = await this.badgeService.findBySlug(slug);
  //     if (!badge) {
  //       throw new NotFoundException('Badge not found');
  //     }

  //     const userBadge = await this.userBadgeService.findByUserIdAndBadgeId(
  //       createUserBadgeDto.userId,
  //       badge.id,
  //     );
  //     if (userBadge) {
  //       throw new BadRequestException('Badge already redeemed');
  //     }

  //     return this.userBadgeService.create(createUserBadgeDto.userId, badge.id);
  //   }
}
