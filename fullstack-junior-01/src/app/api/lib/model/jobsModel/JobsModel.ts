import { jobs } from "@/database/jobs";
import { IPerson } from "../../../interface/IPerson";
import { IJob } from "@/app/api/interface/IJob";

export function getJobs(): IJob[] {
    try {
        return jobs;
    } catch (error) {
        throw new Error('Erro na leitura de jobs');
    }
}

export const JobsModel = {
    getJobs,
}