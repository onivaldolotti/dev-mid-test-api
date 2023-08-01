import { Controller, Get, Query } from '@nestjs/common';
import { TableService } from './table.service';
import { ApiTags } from '@nestjs/swagger';
import { TableDto } from './dto/table.dto';

@ApiTags('5. Table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  handle(@Query() tableDto: TableDto): number[] {
    return this.tableService.execute(+tableDto.number);
  }
}
