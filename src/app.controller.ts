import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('ping')
  ping(): any {
    return {
      success: true,
      message: 'pong',
      data: {},
    };
  }
}
