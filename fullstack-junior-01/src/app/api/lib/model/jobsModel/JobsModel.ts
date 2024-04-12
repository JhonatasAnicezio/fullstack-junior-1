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

export function getJobsByLevel(): IJob[] {
    try {
        return jobs;
    } catch (error) {
        throw new Error('Erro na leitura de jobs');
    }
}

export function getJobById(id: number) {
    try {
        const job = jobs.find((job) => job.id === id)

        return job;
    } catch (error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
}

export function postJobSubmit(person: IPerson) {
    return `Thank you for your application, ${person.name}`
}

export const JobsModel = {
    getJobs,
    getJobById,
    postJobSubmit,
}