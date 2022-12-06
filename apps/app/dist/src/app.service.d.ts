import { PostTokenAddressResponseDTO } from 'dto/post';
export declare class AppService {
    getHello(): string;
    findToken(tokenAddress: string): PostTokenAddressResponseDTO;
}
