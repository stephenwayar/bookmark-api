import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  fetchAll(): string {
    return 'An array of all users';
  }

  @Get('/verified')
  fetchVerifiedUsers(): string {
    return 'An array of verified users';
  }

  @Get('/assets')
  getTotalAssests(): number {
    return this.userService.addNumber(3, 5);
  }
}
