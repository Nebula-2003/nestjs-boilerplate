import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async login({ email, password }) {
    const user = await this.userService.findOneByQuery({ email });
    if (!user)   return 'User not found';
    
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return 'Invalid credentials';
    }
    return 'Login successful';    
  }

  async socialSignIn() {
    return 'social-sign-in';
  }
}
