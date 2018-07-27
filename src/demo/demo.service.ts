import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  tellStory() {
    return '😄 😅 😨 😱 🦖 👻';
  }
}
