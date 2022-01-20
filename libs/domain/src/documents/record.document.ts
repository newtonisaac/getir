import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IRecord } from '../interfaces/record.interface';

@Schema()
export class Record extends Document implements IRecord {
  @Prop()
  key: string;

  @Prop()
  createdAt: Date;

  @Prop()
  counts: number[];

  @Prop()
  totalCount: number
}

export const RecordSchema = SchemaFactory.createForClass(Record);
