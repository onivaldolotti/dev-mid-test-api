import { Controller, Get, Query } from '@nestjs/common';
import { FactorialService } from './factorial.service';
import { ApiTags } from '@nestjs/swagger';
import { FactorialDto } from './dto/factorial.dto';

@ApiTags('3. Factorial')
@Controller('factorial')
export class FactorialController {
  constructor(private readonly factorialService: FactorialService) {}

  @Get()
  handle(@Query() factorialDto: FactorialDto): number {
    return this.factorialService.execute(+factorialDto.number);
  }
}
