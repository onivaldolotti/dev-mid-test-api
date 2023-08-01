import { Module } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { PalindromeController } from './palindrome.controller';

@Module({
  controllers: [PalindromeController],
  providers: [PalindromeService],
})
export class PalindromeModule {}
