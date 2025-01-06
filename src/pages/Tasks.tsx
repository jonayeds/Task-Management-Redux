import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import {TTask} from "@/redux/features/task/taskSlice"

const Tasks = () => {
  const {data, isLoading, isError} = useGetTasksQuery(undefined,{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })
  console.log(data,isLoading, isError)
  if(isLoading){
    return (
      <div className="h-screen flex justify-center items-center text-3xl">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="container  mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-6">Your Tasks</h1>
      <div className="flex justify-center">
<AddTaskModal/>
      </div>
      <Tabs defaultValue="All" className="mx-auto my-6 max-w-[70vw]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="All">All</TabsTrigger>
        <TabsTrigger value="Low" >Low</TabsTrigger>
        <TabsTrigger value="Medium" >Medium</TabsTrigger>
        <TabsTrigger value="High" >High</TabsTrigger>
      </TabsList>
      </Tabs>
      <div>
        {
          data.tasks.map((task:TTask)=> <TaskCard key={task.id} task={task}/>)
        }
      </div>
    </div>
  );
};

export default Tasks;
