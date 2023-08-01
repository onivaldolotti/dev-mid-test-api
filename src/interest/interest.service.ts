import { Injectable } from '@nestjs/common';

@Injectable()
export class InterestService {
  execute(
    initialCapital: number,
    interestRate: number,
    investmentTime: number,
  ): number {
    const monthlyInterestRate = 1 + interestRate / 100;
    const finalValue =
      initialCapital * Math.pow(monthlyInterestRate, investmentTime);
    return parseFloat(finalValue.toFixed(2));
  }
}
