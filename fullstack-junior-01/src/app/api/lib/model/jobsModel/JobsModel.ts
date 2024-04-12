import { jobs } from "@/database/jobs";
import { IPerson } from "../../../interface/IPerson";

export async function getJobs() {
    try {
        return jobs;
    } catch (error) {
        throw new Error('Erro na leitura de jobs');
    }
}

export async function getJobsByLevel(level: string) {
    try {
        const jobsJuniors = jobs.filter((job) => job.level === level)

        return jobsJuniors;
    } catch (error) {
        throw new Error('Erro na leitura de jobs a partir do level');
    }
}

export const JobsModel = {
    getJobs,
    getJobsByLevel,
}