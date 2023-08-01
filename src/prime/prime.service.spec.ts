import { Test, TestingModule } from '@nestjs/testing';
import { PrimeService } from './prime.service';

describe('PrimeService', () => {
  let service: PrimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimeService],
    }).compile();

    service = module.get<PrimeService>(PrimeService);
  });

  describe('execute', () => {
    it('should return an array of 10 prime numbers starting from the input number if the input number is prime', () => {
      const inputNumber = 5;
      const expectedOutput = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

      const result = service.execute(inputNumber);

      expect(result).toEqual(expectedOutput);
    });

    it('should return "The number is not prime." if the input number is not prime', () => {
      const inputNumber = 4;
      const expectedOutput = 'The number is not prime.';

      const result = service.execute(inputNumber);

      expect(result).toBe(expectedOutput);
    });
  });

  describe('isPrimeNumber', () => {
    it('should return true for prime numbers', () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

      primes.forEach((num) => {
        const result = service['isPrimeNumber'](num);
        expect(result).toBe(true);
      });
    });

    it('should return false for non-prime numbers', () => {
      const nonPrimes = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 20];

      nonPrimes.forEach((num) => {
        const result = service['isPrimeNumber'](num);
        expect(result).toBe(false);
      });
    });
  });
});
