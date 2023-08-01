import { Test, TestingModule } from '@nestjs/testing';
import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let service: PalindromeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalindromeService],
    }).compile();

    service = module.get<PalindromeService>(PalindromeService);
  });

  it('should detect palindromes correctly', () => {
    expect(service.execute('level')).toBe(true);
    expect(service.execute('radar')).toBe(true);
    expect(service.execute('Racecar')).toBe(true);
  });

  it('should detect non-palindromes correctly', () => {
    expect(service.execute('hello')).toBe(false);
    expect(service.execute('world')).toBe(false);
    expect(service.execute('NestJS')).toBe(false);
  });
});
