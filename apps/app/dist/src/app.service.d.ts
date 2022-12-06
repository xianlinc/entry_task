import { HttpService } from '@nestjs/axios';
import { PostTokenAddressResponseDTO } from 'dto/post';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    findToken(tokenAddress: string): Promise<PostTokenAddressResponseDTO>;
}
