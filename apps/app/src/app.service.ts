import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { PostTokenAddressResponseDTO } from "dto/post";
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return "Server is up!";
  }
  async findToken(tokenAddress: string): Promise<PostTokenAddressResponseDTO> {
    const query = { token_info: {} };
    const queryEncoded: string = btoa(JSON.stringify(query));
    const reqUrl = `https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/${tokenAddress}/smart/${queryEncoded}`;

    const data = this.httpService.get(reqUrl).pipe(
      map((res: { data: QueryResponse }) => {
        const transformed: PostTokenAddressResponseDTO = {
          name: res.data.data.name,
          symbol: res.data.data.symbol,
          totalSupply: res.data.data.total_supply,
        };
        return transformed;
      }),
    );
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
