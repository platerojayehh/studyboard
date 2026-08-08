import { deleteGroup, getGroupById, updateGroup } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}:{params: Promise<{id: string}>}) {
    const { id } = await params;
    const group = await getGroupById(id);
    
    if (!group){
        return NextResponse.json({error: "Group does not exist"}, {status: 404});
    }

    return NextResponse.json(group);

}

export async function PATCH(request: Request, {params}:{params: Promise<{id: string}>}) {
    const { id } = await params;
    const body = await request.json();
    const updated = await updateGroup(id, body);

    if(!updated){
        return NextResponse.json({error: "Group does not exist"}, {status: 404});
    }

     return NextResponse.json(updated);
}

export async function DELETE(request: Request, {params}:{params: Promise<{id: string}>}) {
    const { id } = await params;
    const deleted = await deleteGroup(id);

    if(!deleted){
        return NextResponse.json({error: "Group does not exist"}, {status: 404});
    }

    return NextResponse.json({message: "Group deleted successfully"});
}