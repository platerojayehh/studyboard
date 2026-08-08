import { createTask, getGroupById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const group =  await getGroupById(id)
    
    if (!group){
        return NextResponse.json({error: "Group does not exist"}, {status: 404});
    }

    return NextResponse.json(group.tasks);
}

export async function POST(request: Request, {params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const body = await request.json();

    if (!body.title){
        return NextResponse.json(
            {error: "'Title' is required"},
            {status: 400}
        );
    }

    const newTask = await createTask(id, body.title);

    if(!newTask) {
        return NextResponse.json({error: "Group does not exist"}, {status: 404});
    }

    return NextResponse.json(newTask, {status: 201});
} 