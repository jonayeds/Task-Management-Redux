import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
type Task = {
    id:string,
    title:string,
    description:string,
    dueDate:string,
    priority:"High"| "Medium"| "Low",
    isCompleted:boolean,
}
interface InitialState {
    tasks:Task[],
    filter:"All"|"Completed"|"Incompleted"
}
const initialState: InitialState = {
    tasks:[
        {
            id:"",
            title:"",
            description:"",
            dueDate:"",
            isCompleted:false,
            priority:"High"
        }
    ],
    filter:"All"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{

    }
})

export const selectTasks = (state: RootState)=> {
    return state.todoSlice.tasks
}
export const selectFilter = (state: RootState)=> {
    return state.todoSlice.filter
}

export default taskSlice.reducer