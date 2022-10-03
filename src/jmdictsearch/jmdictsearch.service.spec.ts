import { Test, TestingModule } from '@nestjs/testing';
import { JmdictsearchService } from './jmdictsearch.service';

describe('JmdictsearchService', () => {
  let service: JmdictsearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JmdictsearchService],
    }).compile();

    service = module.get<JmdictsearchService>(JmdictsearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
