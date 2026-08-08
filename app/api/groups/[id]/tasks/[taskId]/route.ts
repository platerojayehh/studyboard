import { deleteTask, updateTask } from "@/lib/data";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, {params}: {params: Promise<{id: string; taskId: string}>}) {
    const { id, taskId } = await params;
    const body = await request.json();
    const updated = await updateTask(id, taskId, body)

    if(!updated){
        return NextResponse.json({error: "Task does not exist"}, {status: 404});
    }

    return NextResponse.json(updated);
}


export async function DELETE(request: Request, {params}: {params: Promise<{id: string; taskId: string}>}) {
    const { id, taskId } = await params;
    const deleted = await deleteTask(id, taskId);
    if(!deleted){
        return NextResponse.json({error: "Task does not exist"}, {status: 404});
    }

    return NextResponse.json({message: "Task deleted successfully"});
} 