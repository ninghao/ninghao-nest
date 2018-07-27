import { Controller, Get, Param } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get()
  ghostStory() {
    return this.demoService.tellStory();
  }

  @Get(':id')
  show(@Param('id') id) {
    return `id: ${ id }`;
  }
}
