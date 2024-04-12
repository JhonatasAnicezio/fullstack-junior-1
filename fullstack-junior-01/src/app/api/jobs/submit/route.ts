import { NextRequest } from "next/server";
import { JobsService } from "../../lib/service/jobsService/JobsService";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const data = JobsService.postJobSubmit(body);

    if (!data) {
        return Response.json({ data: "Field invalid or not found" }, { status: 400 })
    }

    return Response.json({ message: data });
}
