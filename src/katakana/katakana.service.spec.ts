import { Test, TestingModule } from '@nestjs/testing';
import { KatakanaService } from './katakana.service';

describe('KatakanaService', () => {
  let service: KatakanaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KatakanaService],
    }).compile();

    service = module.get<KatakanaService>(KatakanaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
