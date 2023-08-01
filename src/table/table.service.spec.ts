import { Test, TestingModule } from '@nestjs/testing';
import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableService],
    }).compile();

    service = module.get<TableService>(TableService);
  });

  it('should generate the table correctly for number 5', () => {
    const result = service.execute(5);
    expect(result).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  });
});
