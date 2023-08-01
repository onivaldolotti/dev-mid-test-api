import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PalindromeDto {
  @ApiProperty()
  @IsNotEmpty()
  word: string;
}
