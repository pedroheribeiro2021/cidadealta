import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'localhost',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: 'root',
      password: '123456',
      database: 'cidadealta',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // BadgeModule,
    // UserBadgeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
