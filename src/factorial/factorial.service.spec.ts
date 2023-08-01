import { Test, TestingModule } from '@nestjs/testing';
import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  let service: FactorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorialService],
    }).compile();

    service = module.get<FactorialService>(FactorialService);
  });

  it('should calculate factorial correctly', () => {
    expect(service.execute(0)).toBe(1);
    expect(service.execute(1)).toBe(1);
    expect(service.execute(5)).toBe(120);
    expect(service.execute(10)).toBe(3628800);
  });
});
