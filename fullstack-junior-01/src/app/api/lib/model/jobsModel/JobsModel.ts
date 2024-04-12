import { jobs } from "@/database/jobs";
import { IPerson } from "../../../interface/IPerson";

export async function getJobs() {
    try {
        return jobs;
    } catch (error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
}

export async function getJobsByLevel(level: string) {
    try {
        const jobsJuniors = jobs.filter((job) => job.level === level)

        return jobsJuniors;
    } catch (error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
}

export async function getJobById(id: number) {
    try {
        const job = jobs.filter((job) => job.id === id)

        return job;
    } catch (error) {
        console.error(`Erro na leitura do arquivo ${error}`);
    }
}

export async function postJobSubmit({ name, age, phone, state, city }: IPerson) {
    return {
        message: `Thank you for your
        application, ${name}`
    }
}

export const JobsModel = {
    getJobs,
}