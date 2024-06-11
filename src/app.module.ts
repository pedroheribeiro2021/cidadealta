import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BadgeModule } from './modules/badge.module';
import { UserModule } from './modules/user.module';
import { UserBadgeModule } from './modules/userBadge.module';
import { Badge } from './entities/badge.entity';
import { UserBadge } from './entities/userBadge.entity';
import { User } from './entities/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'localhost',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: 'root',
      password: '123456',
      database: 'cidadealta',
      // autoLoadEntities: true,
      entities: [User, Badge, UserBadge],
      synchronize: true,
    }),
    UserModule,
    BadgeModule,
    UserBadgeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
