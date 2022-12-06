import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { PostTokenAddressResponseDTO } from 'dto/post';
import { firstValueFrom, lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async findToken(tokenAddress: string): Promise<PostTokenAddressResponseDTO> {
    const mock = {
      name: tokenAddress,
      symbol: 'TEST',
      totalSupply: 'TEST',
    };

    const query = { token_info: {} };
    const queryEncoded: string = btoa(JSON.stringify(query));
    const reqUrl = `https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/${tokenAddress}/smart/${queryEncoded}`;

    const data = this.httpService.get(reqUrl).pipe(
      map((res: { data: QueryResponse }) => {
        console.log(res.data.data);
        const transformed: PostTokenAddressResponseDTO = {
          name: res.data.data.name,
          symbol: res.data.data.symbol,
          totalSupply: res.data.data.total_supply,
        };
        console.log(transformed);
        return transformed;
      }),
    );
    console.log(data);
    return await lastValueFrom(data);
  }
}
type QueryResponse = {
  data: {
    name: string;
    symbol: string;
    total_supply: string;
    decimal: string;
  };
};
