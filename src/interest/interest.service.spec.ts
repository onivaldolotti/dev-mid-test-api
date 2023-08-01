import { Test, TestingModule } from '@nestjs/testing';
import { InterestService } from './interest.service';

describe('InterestService', () => {
  let service: InterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestService],
    }).compile();

    service = module.get<InterestService>(InterestService);
  });

  describe('execute', () => {
    it('should calculate the final value of an investment with 2 decimal places', () => {
      const initialCapital = 1000;
      const interestRate = 5;
      const investmentTime = 12;
      const expectedOutput = 1795.86;

      const result = service.execute(
        initialCapital,
        interestRate,
        investmentTime,
      );

      expect(result).toBe(expectedOutput);
    });
  });
});
