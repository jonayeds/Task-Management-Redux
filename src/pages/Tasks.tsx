import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div className="container  mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-6">Your Tasks</h1>
      <div className="flex justify-center">
      <AddTaskModal/>
      </div>
      {
        tasks.map((task) => {
          return <TaskCard key={task.id} task={task}/>
        })  
      } 
    </div>
  );
};

export default Tasks;
