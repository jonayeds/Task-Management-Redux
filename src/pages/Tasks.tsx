import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";


const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useDispatch()
  return (
    <div className="container  mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-6">Your Tasks</h1>
      <div className="flex justify-center">
      <AddTaskModal/>
      </div>
      <Tabs defaultValue="All" className="mx-auto my-6 max-w-[70vw]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="All" onClick={()=>dispatch(updateFilter("All"))}>All</TabsTrigger>
        <TabsTrigger value="Low" onClick={()=>dispatch(updateFilter("Low"))}>Low</TabsTrigger>
        <TabsTrigger value="Medium" onClick={()=>dispatch(updateFilter("Medium"))}>Medium</TabsTrigger>
        <TabsTrigger value="High" onClick={()=>dispatch(updateFilter("High"))}>High</TabsTrigger>
      </TabsList>
      </Tabs>
      {
        tasks.map((task) => {
          return <TaskCard key={task.id} task={task}/>
        })  
      } 
    </div>
  );
};

export default Tasks;
