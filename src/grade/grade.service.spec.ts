import { Test, TestingModule } from '@nestjs/testing';
import { GradeService } from './grade.service';

describe('GradeService', () => {
  let service: GradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradeService],
    }).compile();

    service = module.get<GradeService>(GradeService);
  });

  it('should calculate average correctly', () => {
    expect(service.execute([8, 9, 7])).toBe(8);
    expect(service.execute([10, 8, 9, 7])).toBe(8.5);
    expect(service.execute([6, 6, 6, 6, 6])).toBe(6);
    expect(service.execute([7])).toBe(7);
  });
});
