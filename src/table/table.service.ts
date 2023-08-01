import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  execute(number: number): number[] {
    const table: number[] = [];
    for (let i = 1; i <= 10; i++) {
      table.push(number * i);
    }
    return table;
  }
}
