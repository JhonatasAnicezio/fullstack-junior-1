import { IJob } from "@/app/api/interface/IJob";
import { JobsModel } from "../../model/jobsModel/JobsModel";

export function getJobs(): IJob[] {
    const data = JobsModel.getJobs();

    return data;
}

export function getJobsByLevel(level: string): IJob[] {
    const data = JobsService.getJobsByLevel(level);
    
    return data;
}

export const JobsService = {
    getJobs,
    getJobsByLevel,
}