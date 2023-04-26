import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  addNumber(a: number, b: number) {
    return a + b;
  }
}
