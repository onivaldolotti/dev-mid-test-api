import { Controller, Get, Query } from '@nestjs/common';
import { VowelService } from './vowel.service';
import { VowelDto } from './dto/vowel.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('6. Vowel Counter')
@Controller('vowel')
export class VowelController {
  constructor(private readonly vowelService: VowelService) {}

  @Get()
  handle(@Query() vowelDto: VowelDto): number {
    return this.vowelService.execute(vowelDto.sentence);
  }
}
