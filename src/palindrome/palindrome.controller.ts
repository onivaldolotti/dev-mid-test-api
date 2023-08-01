import { Controller, Get, Query } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';
import { PalindromeDto } from './dto/palindrome.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('4. Palindrome')
@Controller('palindrome')
export class PalindromeController {
  constructor(private readonly palindromeService: PalindromeService) {}

  @Get()
  handle(@Query() palindromeDto: PalindromeDto): boolean {
    return this.palindromeService.execute(palindromeDto.word);
  }
}
