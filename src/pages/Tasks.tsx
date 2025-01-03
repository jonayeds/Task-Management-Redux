import { selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

const Tasks = () => {
    const tasks = useAppSelector(selectTasks)

    return (
    <div>Tasks</div>
  )
}

export default Tasks