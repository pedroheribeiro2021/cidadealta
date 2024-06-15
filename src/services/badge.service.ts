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

@Injectable()
export class BadgeService {
  constructor(
    @InjectRepository(Badge)
    private readonly badgeRepository: Repository<Badge>,
    private readonly userBadgeService: UserBadgeService,
  ) {}

  async findAll(page = 1, limit = 10, name?: string): Promise<any> {
    const queryBuilder = this.badgeRepository.createQueryBuilder('badge');

    if (name) {
      queryBuilder.where('badge.name LIKE :name', { name: `%${name}%` });
    }

    const [data, totalItems] = await queryBuilder
      .take(limit)
      .skip((page - 1) * limit)
      .getManyAndCount();

    return {
      data,
      meta: {
        totalItems,
        itemCount: data.length,
        itemsPerPage: limit,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
    };
  }

  findBySlug(slug: string): Promise<Badge | undefined> {
    return this.badgeRepository.findOne({ where: { slug } });
  }

  async create(createBadgeDto: CreateBadgeDto): Promise<Badge> {
    const newBadge = this.badgeRepository.create(createBadgeDto);
    return this.badgeRepository.save(newBadge);
  }

  async redeem(slug: string, userId: number): Promise<any> {
    const badge = await this.findBySlug(slug);
    if (!badge) {
      throw new NotFoundException('Badge not found');
    }

    const userBadge = await this.userBadgeService.findByUserIdAndBadgeId(
      userId,
      badge.id,
    );
    if (userBadge) {
      throw new BadRequestException('Badge already redeemed');
    }

    return this.userBadgeService.create(userId, badge.id);
  }
}
