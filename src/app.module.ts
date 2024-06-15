import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BadgeModule } from './modules/badge.module';
import { UserModule } from './modules/user.module';
import { UserBadgeModule } from './modules/userBadge.module';
import { Badge } from './entities/badge.entity';
import { UserBadge } from './entities/userBadge.entity';
import { User } from './entities/users.entity';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: 'root',
      password: '123456',
      database: 'cidadealta',
      entities: [User, Badge, UserBadge],
      synchronize: true,
    }),
    UserModule,
    BadgeModule,
    UserBadgeModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
