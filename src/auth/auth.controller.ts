import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login() {
    return 'login';
  }

  @Post('social-sign-in')
  async socialSignIn() {
    return 'social-sign-in';
  }
}
