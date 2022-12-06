import { Injectable } from '@nestjs/common';
import { PostTokenAddressResponseDTO } from 'dto/post';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findToken(tokenAddress: string): PostTokenAddressResponseDTO {
    console.log(tokenAddress);
    const mock = {
      name: 'TEST',
      symbol: 'TEST',
      totalSupply: 'TEST',
    };
    return mock;
  }
}
