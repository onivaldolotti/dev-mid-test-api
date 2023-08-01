import { Test, TestingModule } from '@nestjs/testing';
import { VowelService } from './vowel.service';

describe('VowelService', () => {
  let service: VowelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VowelService],
    }).compile();

    service = module.get<VowelService>(VowelService);
  });

  it('should count vowels correctly', () => {
    expect(service.execute('Hello World')).toBe(3);
    expect(service.execute('NestJS is awesome')).toBe(6);
    expect(service.execute('Testing 123')).toBe(2);
    expect(service.execute('')).toBe(0);
  });
});
