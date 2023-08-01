import { IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PrimeDto {
  @ApiProperty()
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  number: number;
}
