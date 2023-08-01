import { Controller, Get, Query } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeDto } from './dto/grade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('7. Grade Average')
@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Get()
  handle(@Query() gradeDto: GradeDto): number {
    const { grade1, grade2, grade3 } = gradeDto;
    return this.gradeService.execute([+grade1, +grade2, +grade3]);
  }
}
