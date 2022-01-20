import { ApiProperty } from '@nestjs/swagger';
import { IRecord } from '@getir/domain/interfaces/record.interface';

export class RecordDto {
  
  @ApiProperty()
  key: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  totalCount: number;
  
  constructor(obj: Partial<RecordDto> = {}) {
    Object.assign(this, obj);
  }

  static fromModel(record: IRecord): RecordDto {
    return new RecordDto({
      key: record.key,
      createdAt: record.createdAt,
      totalCount: record.totalCount
    })
  }
}
