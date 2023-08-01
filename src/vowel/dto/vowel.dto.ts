import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VowelDto {
  @ApiProperty()
  @IsNotEmpty()
  sentence: string;
}
