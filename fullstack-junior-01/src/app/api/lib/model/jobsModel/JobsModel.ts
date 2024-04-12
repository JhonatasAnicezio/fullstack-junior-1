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

export function getJobsByLevel(level: string): IJob[] {
    try {
        const jobsJuniors = jobs.filter((job) => job.level === level);

        if (!jobsJuniors) {
            throw new Error('Job não encontrado para o nível especificado');
        }

        return jobsJuniors;
    } catch (error) {
        throw new Error('Erro na leitura de jobs a partir do level');
    }
}

export const JobsModel = {
    getJobs,
    getJobsByLevel,
}