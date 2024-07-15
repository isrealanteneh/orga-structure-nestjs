import { Controller, Get } from '@nestjs/common';
import { orgaService } from './app.service';

@Controller('/home')
export class orgaController {
  constructor(private readonly organizatioService: orgaService) {}

  @Get()
  home(): string {
    return this.organizatioService.home();
  }
}
