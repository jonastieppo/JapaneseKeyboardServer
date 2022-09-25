import { Test, TestingModule } from '@nestjs/testing';
import { HiraganaController } from './hiragana.controller';

describe('HiraganaController', () => {
  let controller: HiraganaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiraganaController],
    }).compile();

    controller = module.get<HiraganaController>(HiraganaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
