import { cn } from "@/lib/utils";
import { TTask } from "@/redux/features/task/taskSlice";
import { MdOutlineDeleteOutline } from "react-icons/md";
interface IProps {
    task:TTask
}
const TaskCard = ({task}: IProps) => {
  return (
    <div className="border border-gray-200 rounded-lg py-4 px-8 mt-4">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className={cn("w-4 h-4  rounded-full", {
            "bg-green-500": task.priority === "Low",
            "bg-yellow-500": task.priority === "Medium",
            "bg-red-500": task.priority === "High"
          })}></div>
          <h2 className="text-2xl">{task.title}</h2>
        </div>
        <div className="flex gap-3 items-center">   
            <button><MdOutlineDeleteOutline className="text-red-500 text-xl"/></button>
          <input type="checkbox" className="accent-green-500" />
        </div>
      </div>
      <div className=" mt-4">
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
