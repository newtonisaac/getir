import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordController } from './record.controller';
import { RecordService as RecordService } from './record.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { DomainModule } from '@getir/domain';
import { fromRootPath } from 'rootPath';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: process.env.NODE_ENV != 'dev',
      envFilePath: fromRootPath('./env/dev.env'),
    }),
    MongooseModule.forRoot(configuration().mongo.connection),
    DomainModule,
  ],
  controllers: [RecordController],
  providers: [Logger, RecordService, RecordController],
})
export class AppModule {}
