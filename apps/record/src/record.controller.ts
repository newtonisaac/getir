import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecordService } from './record.service';
import { RecordDto } from './model/record.dto';
import { RecordQueryDto as RecordQueryDto } from './model/record.query.dto';

@Controller('/record')
@ApiTags('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  public async get(
    @Query() query: RecordQueryDto,
  ): Promise<RecordDto[]> {
    return (await this.recordService.list(query)).map(r => RecordDto.fromModel(r));
  }
}
