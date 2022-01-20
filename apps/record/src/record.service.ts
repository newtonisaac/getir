import { Injectable } from '@nestjs/common';
import { RecordDataService } from '@getir/domain/services/data/record-data.service';
import { RecordQueryDto } from './model/record.query.dto';
import { IRecord } from '@getir/domain/interfaces/record.interface';

@Injectable()
export class RecordService {
  constructor(
    private recordDataService: RecordDataService
  ) {}

  async list(query: RecordQueryDto): Promise<IRecord[]> {
    return await this.recordDataService.list(query)
  }
}
