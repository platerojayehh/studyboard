import TaskItem from "@/components/TaskItem";
import { getGroupById } from "@/lib/data";

export default async function GroupPage({params}:{params: Promise<{id:string}>}){
    const { id } = await params;
    const group = getGroupById(id);
    console.log(group);

    function getTasks(id: string) {
        return getGroupById(id)?.tasks;
    }

    const tasks = getTasks(id);

    return(
        <div>
            <h1>
                {group?.name}
            </h1>
            <h2>
                {group?.subject}
            </h2>
            <h3>
                {group?.memberCount}
            </h3>
            {/* Activity 2 - Add a function that gets the tasks based on the group number
            and then render them one by one using the task item component */}
            <ul>
                {tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}
