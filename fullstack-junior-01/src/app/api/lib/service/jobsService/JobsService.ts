import { JobsModel } from "../../model/jobsModel/JobsModel";

export async function getJobs() {
    const data = await JobsModel.getJobs();

    return data;
}

export const JobsService = {
    getJobs,
}