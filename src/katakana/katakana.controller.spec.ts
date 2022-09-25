import { Test, TestingModule } from '@nestjs/testing';
import { KatakanaController } from './katakana.controller';

describe('KatakanaController', () => {
  let controller: KatakanaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KatakanaController],
    }).compile();

    controller = module.get<KatakanaController>(KatakanaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
