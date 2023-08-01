import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimeService {
  execute(number: number): number[] | string {
    if (this.isPrimeNumber(number)) {
      const primes: number[] = [];
      let currentNum = number;
      while (primes.length < 10) {
        if (this.isPrimeNumber(currentNum)) {
          primes.push(currentNum);
        }
        currentNum++;
      }
      return primes;
    } else {
      return 'The number is not prime.';
    }
  }

  private isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
}
