import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ThrottlerGuard)
  @Post()
  async getRequestIndex(@Body() req: { index: number }): Promise<string> {
    const data = await this.appService.getRequestIndex(req.index);
    console.log(data);
    return data;
  }
}
