import { NextRequest } from "next/server";
import { JobsService } from "../lib/service/jobsService/JobsService";

export async function GET(req: NextRequest) {
    const data = await JobsService.getJobs();

    return Response.json({ message: data });
}
