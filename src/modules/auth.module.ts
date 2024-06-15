import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';
import { AuthController } from 'src/controllers/auth.controller';
import { UserModule } from './user.module';
import { LocalStrategy } from 'src/jwt/local.strategy';
import { JwtStrategy } from 'src/jwt/jwt.schema';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: false }),
    JwtModule.register({
      secret: 'secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
