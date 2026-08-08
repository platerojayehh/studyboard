import TaskItem from "@/components/TaskItem";
import { getGroupById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function GroupPage({params}:{params: Promise<{id:string}>}){
    const { id } = await params;
    const group = await getGroupById(id);

    if(!group){
        notFound();
    }

    return(
        <div>
            <h1>
                {group?.name}
            </h1>
            <h2 className="mt-5 text-lg"> Tasks
                {group?.subject}
            </h2>
            <ul className="mt-5 flex flex-col gap -2">
                {group?.tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
            <h3>
                {group?.memberCount}
            </h3>
            {/* Activity 2 - Add a function that gets the tasks based on the group number
            and then render them one by one using the task item component */}
            <ul>
            </ul>
        </div>
    )
}
 