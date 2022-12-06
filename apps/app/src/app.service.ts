import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findToken(tokenAddress: string): string[] {
    return [tokenAddress];
  }
}
