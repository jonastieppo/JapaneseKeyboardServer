import { Test, TestingModule } from '@nestjs/testing';
import { HiraganaService } from './hiragana.service';

describe('HiraganaService', () => {
  let service: HiraganaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HiraganaService],
    }).compile();

    service = module.get<HiraganaService>(HiraganaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
