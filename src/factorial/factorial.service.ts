import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorialService {
  execute(num: number): number {
    if (num === 0 || num === 1) return 1;
    return num * this.execute(num - 1);
  }
}
