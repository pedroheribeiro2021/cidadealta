import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBadgeDto } from 'src/dtos/create-badge.dto';
import { Badge } from 'src/entities/badge.entity';
import { Repository } from 'typeorm';
import { UserBadgeService } from './userBadge.service';
import { RedeemBadgeDto } from 'src/dtos/redeem-badge.dto';

@Injectable()
export class BadgeService {
  constructor(
    @InjectRepository(Badge)
    private readonly badgeRepository: Repository<Badge>,
    private readonly userBadgeService: UserBadgeService,
  ) {}

  async findAll(
    page: number,
    limit: number,
  ): Promise<{ data: Badge[]; total: number }> {
    const [result, total] = await this.badgeRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data: result, total };
  }

  findBySlug(slug: string): Promise<Badge | undefined> {
    return this.badgeRepository.findOne({ where: { slug } });
  }

  async create(createBadgeDto: CreateBadgeDto): Promise<Badge> {
    const newBadge = this.badgeRepository.create(createBadgeDto);
    return this.badgeRepository.save(newBadge);
  }

  async redeem(slug: string, redeemBadgeDto: RedeemBadgeDto): Promise<any> {
    const badge = await this.findBySlug(slug);
    if (!badge) {
      throw new NotFoundException('Badge not found');
    }

    const userBadge = await this.userBadgeService.findByUserIdAndBadgeId(
      redeemBadgeDto.userId,
      badge.id,
    );
    if (userBadge) {
      throw new BadRequestException('Badge already redeemed');
    }

    return this.userBadgeService.create(redeemBadgeDto.userId, badge.id);
  }
}
