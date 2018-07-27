import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from './demo.controller';

describe('Demo Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DemoController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DemoController = module.get<DemoController>(DemoController);
    expect(controller).toBeDefined();
  });
});
