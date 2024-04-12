import { JobsModel } from "../../model/jobsModel/JobsModel";

export async function getJobs() {
    const data = await JobsModel.getJobs();

    return data;
}

export async function getJobsByLevel() {
    const data = await JobsService.getJobs();

    return data;
}

export const JobsService = {
    getJobs,
    getJobsByLevel,
}