import { Test, TestingModule } from '@nestjs/testing';
import { JobsService } from './jobs.service';

describe('JobsService', () => {
  let provider: JobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobsService],
    }).compile();

    provider = module.get<JobsService>(JobsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
