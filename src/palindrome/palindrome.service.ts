import { Injectable } from '@nestjs/common';

@Injectable()
export class PalindromeService {
  execute(word: string): boolean {
    const reversedWord = word.split('').reverse().join('');
    return word.toLowerCase() === reversedWord.toLowerCase();
  }
}
