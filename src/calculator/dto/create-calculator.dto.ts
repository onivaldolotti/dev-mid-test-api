import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCalculatorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  num1: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  num2: number;

  @ApiProperty({ enum: ['+', '-', '*', '/'] })
  @IsNotEmpty()
  @IsIn(['+', '-', '*', '/'])
  operator: string;
}
