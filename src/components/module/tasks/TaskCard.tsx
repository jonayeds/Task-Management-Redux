import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState, TTask} from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { MdOutlineDeleteOutline } from "react-icons/md";
import UpdateTaskModal from "./UpdateTaskModal";
interface IProps {
    task:TTask
}
const TaskCard = ({task}: IProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className="border border-gray-200 rounded-lg py-4 px-8 mt-4">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center">
          <div className={cn("w-4 h-4  rounded-full", {
            "bg-green-500": task.priority === "Low",
            "bg-yellow-500": task.priority === "Medium",
            "bg-red-500": task.priority === "High"
          })}></div>
          <h2 className={cn("text-2xl", {
            "line-through": task.isCompleted === true, 
          })}>{task.title}</h2>
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3"> 
          <div className="flex gap-3 items-center">
            <button onClick={()=> dispatch(deleteTask(task.id))}><MdOutlineDeleteOutline className="text-red-500 text-xl"/></button>
            <Checkbox className="" checked={task.isCompleted} onClick={()=>dispatch(toggleCompleteState(task.id))}  />
          </div>  
          <UpdateTaskModal task={task}/>
        </div>
      </div>
      <div className=" mt-4">
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
