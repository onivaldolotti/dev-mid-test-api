import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should add two numbers', () => {
    expect(service.execute('+', 3, 5)).toBe(8);
  });

  it('should subtract two numbers', () => {
    expect(service.execute('-', 10, 3)).toBe(7);
  });

  it('should multiply two numbers', () => {
    expect(service.execute('*', 4, 6)).toBe(24);
  });

  it('should divide two numbers', () => {
    expect(service.execute('/', 15, 3)).toBe(5);
  });

  it('should throw an error for invalid operator', () => {
    expect(() => service.execute('^', 5, 2)).toThrowError('Invalid operator');
  });
});
