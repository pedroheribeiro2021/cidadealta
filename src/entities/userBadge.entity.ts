import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Badge } from './badge.entity';
import { User } from './users.entity';

@Entity('user_badges')
export class UserBadge {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userBadges)
  user: User;

  @ManyToOne(() => Badge, (badge) => badge.userBadges)
  badge: Badge;

  @CreateDateColumn()
  redeemedAt: Date;
}
