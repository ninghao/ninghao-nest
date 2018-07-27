import { Controller, Get, Param } from '@nestjs/common';

@Controller('demo')
export class DemoController {
  @Get()
  ghostStory() {
    return '😄 😅 😨 😱 🦖 👻';
  }

  @Get(':id')
  show(@Param('id') id) {
    return `id: ${ id }`;
  }
}
