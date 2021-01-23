import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './shared/job';
@Controller('jobs')
export class JobsController {

    constructor( private jobService: JobsService ) {}

    @Get()
    async getAllJobs():Promise<Job[]> {
        return this.jobService.getAllJobs();
    }

    @Get(':id')
    async getJobById(@Param('id') id: string):Promise<Job> {
        return this.jobService.getJobById(id);
    }

    @Put(':id')
    async updateJob(@Param('id') id: string, @Body() job: Job):Promise<Job> {
        return this.jobService.updateJob(id, job);
    }
}
