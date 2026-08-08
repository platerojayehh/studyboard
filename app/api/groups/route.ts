import { createGroup, getGroups } from "@/lib/data";
import { NextResponse } from "next/server";


export async function GET() {
    const groups = await getGroups();
    return NextResponse.json(groups)
}

export async function POST(request: Request) {
    const body = await request.json();

    if(!body.name || !body.subject) {
        return NextResponse.json(
            {error: "'Name' and/or 'Subject' fields are required"},
            {status: 400}
        );
    }

    const newGroup = await createGroup({ 
        name: body.name,
        subject: body.subject,
        memberCount: body.memberCount,
    });

    return NextResponse.json(newGroup, {status: 201});
}