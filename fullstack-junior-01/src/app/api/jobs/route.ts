import { NextRequest } from "next/server";
import { JobsService } from "../lib/service/jobsService/JobsService";

export async function GET(req: NextRequest) {
    const searchParam = req.nextUrl.searchParams;
    const level = searchParam.get('level');

    if(level) {
        const data = JobsService.getJobsByLevel(level);

        return Response.json({ message: data });
    } else {
        const data = JobsService.getJobs();

        return Response.json({ message: data });
    }
}
