import { AppService } from './app.service';
import { PostTokenAddressDTO, PostTokenAddressResponseDTO } from 'dto/post';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    findToken(body: PostTokenAddressDTO): Promise<PostTokenAddressResponseDTO>;
}
