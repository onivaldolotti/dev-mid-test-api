import { IsNumber, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GradeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  grade1: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  grade2: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  @Type(() => Number)
  grade3: number;
}
