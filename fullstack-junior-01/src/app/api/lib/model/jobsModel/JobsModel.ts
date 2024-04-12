import { jobs } from "@/database/jobs";
import { IPerson } from "../../../interface/IPerson";

export async function getJobs() {
    try {
        return jobs;
    } catch (error) {
        throw new Error('Erro na leitura de jobs');
    }
}

export const JobsModel = {
    getJobs,
}