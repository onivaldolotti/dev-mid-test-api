import { IsNumber, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class InterestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  initialCapital: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  interestRate: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  investmentTime: number;
}
