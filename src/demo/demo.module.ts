import { Module, MiddlewareConsumer } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { DemoMiddleware } from './demo.middleware';

@Module({
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DemoMiddleware)
      .forRoutes(DemoController);
  }
}
