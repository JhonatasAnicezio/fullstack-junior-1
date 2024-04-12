import { NextRequest } from "next/server";
import { JobsService } from "../../lib/service/jobsService/JobsService";

export async function GET(req: NextRequest) {
    const lookIdInPathname = req.nextUrl.pathname.split('jobs/')[1];
    const id = Number.parseInt(lookIdInPathname);

    const data = JobsService.getJobById(id);

    if (!data) {
        return Response.json({message: 'is job not found'}, { status: 404 });
    }

    return Response.json({message: data});
}
