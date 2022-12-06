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
      name: tokenAddress,
      symbol: 'TEST',
      totalSupply: 'TEST',
    };
    const query = { token_info: {} };
    const queryEncoded: string = btoa(JSON.stringify(query));
    const reqUrl = `https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/${tokenAddress}/smart/${queryEncoded}`;
    console.log(reqUrl);
    return mock;
  }
}
