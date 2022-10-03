import { Test, TestingModule } from '@nestjs/testing';
import { JmdictsearchController } from './jmdictsearch.controller';

describe('JmdictsearchController', () => {
  let controller: JmdictsearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JmdictsearchController],
    }).compile();

    controller = module.get<JmdictsearchController>(JmdictsearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
