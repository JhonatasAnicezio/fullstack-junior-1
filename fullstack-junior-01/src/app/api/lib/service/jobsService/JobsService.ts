import { IJob } from "@/app/api/interface/IJob";
import { JobsModel } from "../../model/jobsModel/JobsModel";
import { IPerson } from "@/app/api/interface/IPerson";

export function getJobs(): IJob[] {
    const data = JobsModel.getJobs();

    return data;
}

export function getJobsByLevel(level: string): IJob[] {
    const data = JobsService.getJobs();
    
    const jobsJuniors = data.filter((job) => job.level === level);

    return jobsJuniors;
}

export function getJobById(id: number): IJob | null {
    const data = JobsModel.getJobById(id);

    if (data) {
        return data
    } return null;
}

export function postJobSubmit({ name, age, city, phone, state }: IPerson) {
    if (
        typeof name !== 'string' ||
        typeof age !== 'number' ||
        typeof phone !== 'string' ||
        typeof state !== 'string' ||
        typeof city !== 'string'
    ) {
        return null;
    } else {
        const data = JobsModel.postJobSubmit({ name, age, city, phone, state });

        return data;
    }
}

export const JobsService = {
    getJobs,
    getJobsByLevel,
    getJobById,
    postJobSubmit
}