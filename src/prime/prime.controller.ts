import { Controller, Get, Query } from '@nestjs/common';
import { PrimeService } from './prime.service';
import { ApiTags } from '@nestjs/swagger';
import { PrimeDto } from './dto/prime.dto';

@ApiTags('2. Prime Numbers')
@Controller('prime')
export class PrimeController {
  constructor(private readonly primeService: PrimeService) {}

  @Get('check-and-get-next')
  checkAndGetNextPrimes(@Query() primeDto: PrimeDto): number[] | string {
    return this.primeService.execute(+primeDto.number);
  }
}
