import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4} from "uuid";
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
const initialState: InitialState = {
    tasks:[],
    filter:"All"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action: PayloadAction<TTask>)=>{
            const id = v4()
            const taskData = {
                ...action.payload,
                id,
                isCompleted:false
            }
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