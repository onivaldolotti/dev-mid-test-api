import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('1. Simple Calculator')
@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  handle(@Query() calculationDto: CreateCalculatorDto): number {
    const { num1, num2, operator } = calculationDto;
    return this.calculatorService.execute(operator, +num1, +num2);
  }
}
