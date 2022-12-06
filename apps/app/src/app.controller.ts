import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTokenAddressDTO, PostTokenAddressResponseDTO } from 'dto/post';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async findToken(
    @Body() body: PostTokenAddressDTO,
  ): Promise<PostTokenAddressResponseDTO> {
    console.log(body.tokenAddress);
    return this.appService.findToken(body.tokenAddress);
  }
}
