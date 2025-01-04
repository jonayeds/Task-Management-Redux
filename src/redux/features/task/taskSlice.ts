import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
export type TTask = {
    id:string,
    title:string,
    description:string,
    dueDate:string,
    priority:"High"| "Medium"| "Low",
    isCompleted:boolean,
}
interface InitialState {
    tasks:TTask[],
    filter:"All"|"Completed"|"Incompleted"
}

export type DraftTask = Pick<TTask, "title"|"description"|"dueDate"|"priority">

const createTask = (taskData:DraftTask):TTask=>{
    const id = nanoid()
    return {
        ...taskData,
        id,
        isCompleted:false
    }
}

const initialState: InitialState = {
    tasks:[],
    filter:"All"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action: PayloadAction<DraftTask>)=>{
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state: RootState)=> {
    return state.todoSlice.tasks
}
export const selectFilter = (state: RootState)=> {
    return state.todoSlice.filter
}

export const {addTask} = taskSlice.actions
 
export default taskSlice.reducer