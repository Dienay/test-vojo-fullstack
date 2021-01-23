import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsSchema } from './schemas/jobs.schema';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Job', schema: JobsSchema}])
  ],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
