import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
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
    tasks:[
        {
            id:"001",
            title:"Github",
            description:"Initialize github repository",
            dueDate:"11-11-2021",
            isCompleted:false,
            priority:"High"
        },
        {
            id:"002",
            title:"Frontend",
            description:"Initialize frontend project",
            dueDate:"11-11-2021",
            isCompleted:false,
            priority:"Medium"
        },
        {
            id:"003",
            title:"Backend",
            description:"Initialize backend Server",
            dueDate:"11-11-2021",
            isCompleted:false,
            priority:"Low"
        },
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