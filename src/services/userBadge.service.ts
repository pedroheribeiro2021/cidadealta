import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBadge } from 'src/entities/userBadge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBadgeService {
  constructor(
    @InjectRepository(UserBadge)
    private readonly userBadgeRepository: Repository<UserBadge>,
  ) {}

  findByUserId(userId: any): Promise<UserBadge[]> {
    return this.userBadgeRepository.find({
      where: { user: { id: userId } },
      relations: ['badge'],
    });
  }

  findByUserIdAndBadgeId(
    userId: any,
    badgeId: number,
  ): Promise<UserBadge | undefined> {
    return this.userBadgeRepository.findOne({
      where: { user: { id: userId }, badge: { id: badgeId } },
    });
  }

  async create(userId: any, badgeId: number): Promise<UserBadge> {
    const userBadge = this.userBadgeRepository.create({
      user: { id: userId },
      badge: { id: badgeId },
    });
    return this.userBadgeRepository.save(userBadge);
  }

  async findBadgesByUserId(userId: number): Promise<UserBadge[]> {
    return this.userBadgeRepository.find({
      where: { user: { id: userId } },
      relations: ['badge'],
    });
  }
}
