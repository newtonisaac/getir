import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

//Documents
import { Record, RecordSchema } from './documents/record.document';

//Services
import { RecordDataService } from './services/data/record-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Record.name, schema: RecordSchema },
    ])
  ],
  providers: [
    RecordDataService,
  ],
  exports: [
    RecordDataService,
  ],
})
export class DomainModule {}
