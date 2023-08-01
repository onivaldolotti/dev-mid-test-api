import { Injectable } from '@nestjs/common';

@Injectable()
export class GradeService {
  execute(grades: number[]): number {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / grades.length;
    return parseFloat(average.toFixed(2));
  }
}
