import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from '@/modules/auth/auth.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JobsModule } from './modules/jobs/jobs.module';

@Module({
  controllers: [AppController],
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }),
    AuthModule,
    JobsModule
  ],
  providers: [AppService],
})

export class AppModule { }