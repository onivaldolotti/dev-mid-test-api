import { Injectable } from '@nestjs/common';

@Injectable()
export class VowelService {
  execute(sentence: string): number {
    const vowels = sentence.toLowerCase().match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
  }
}
