import { Controller, Get, Query } from '@nestjs/common';
import { InterestService } from './interest.service';
import { InterestDto } from './dto/interest.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('8. Interest Calculation')
@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get()
  handle(@Query() interestDto: InterestDto): number {
    const { initialCapital, interestRate, investmentTime } = interestDto;
    return this.interestService.execute(
      initialCapital,
      interestRate,
      investmentTime,
    );
  }
}
