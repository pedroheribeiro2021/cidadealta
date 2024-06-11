import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Badge } from 'src/entities/badge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BadgeService {
  constructor(
    @InjectRepository(Badge)
    private readonly badgeRepository: Repository<Badge>,
  ) {}

  findAll(): Promise<Badge[]> {
    console.log('service ok');
    return this.badgeRepository.find();
  }

  findBySlug(slug: string): Promise<Badge | undefined> {
    return this.badgeRepository.findOne({ where: { slug } });
  }
}
