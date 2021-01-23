import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from './shared/job';

@Injectable()
export class JobsService {

    constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

    async getAllJobs() {
        return await this.jobModel.find().exec()
    }

    async getJobById(id: string) {
        return await this.jobModel.findById(id).exec()
    }

    async updateJob(id: string, job: Job) {
        await this.jobModel.updateOne({_id: id}, job).exec()
        return this.getJobById(id)
    }
}

