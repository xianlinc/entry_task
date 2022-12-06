import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTokenAddressDTO, PostTokenAddressResponseDTO } from 'dto/post';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async findToken(@Body() body: PostTokenAddressDTO) {
    return await this.appService.findToken(body.tokenAddress);
  }
}
