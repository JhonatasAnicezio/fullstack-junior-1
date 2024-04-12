import { IJob } from "@/app/api/interface/IJob";
import { JobsModel } from "../../model/jobsModel/JobsModel";

export function getJobs(): IJob[] {
    const data = JobsModel.getJobs();

    return data;
}

export function getJobsByLevel(level: string): IJob[] {
    const data = JobsService.getJobs();
    
    const jobsJuniors = data.filter((job) => job.level === level);

    return jobsJuniors;
}

export const JobsService = {
    getJobs,
    getJobsByLevel,
}