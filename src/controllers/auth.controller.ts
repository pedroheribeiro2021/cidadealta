import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/jwt/local-auth.guard';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
