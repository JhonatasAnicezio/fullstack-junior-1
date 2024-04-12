import { JobsModel } from "../../lib/model/jobsModel/JobsModel";

export async function getJobs() {
    try {
        return await JobsModel.getJobs();
    } catch (error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
}

export const JobsService = {
    getJobs,
}