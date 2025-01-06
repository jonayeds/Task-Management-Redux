import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { TTask } from "@/redux/features/task/taskSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";


interface IProps {
    task:TTask
}
const TaskCard = ({task}: IProps) => {


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
            <button ><MdOutlineDeleteOutline className="text-red-500 text-xl"/></button>
            <Checkbox className="" checked={task.isCompleted}   />
          </div>  
        </div>
      </div>
      <div className=" mt-4">
        <p className="opacity-70">Assigned to {"none"}</p>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
