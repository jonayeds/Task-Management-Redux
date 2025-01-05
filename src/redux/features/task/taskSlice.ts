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
    tasks:[{
        id:"001",
        title:"Github",
        description:"Add a branch",
        dueDate:"ed Jan 22 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
        isCompleted:false,
        priority:'High'
    }],
    filter:"All"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask:(state,action: PayloadAction<DraftTask>)=>{
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState:(state, action: PayloadAction<string>)=>{
            state.tasks.forEach((task)=>(task.id === action.payload) ? task.isCompleted = !task.isCompleted  : task )
        },
        deleteTask:(state, action: PayloadAction<string>)=>{
            state.tasks = state.tasks.filter(task=> task.id !== action.payload)
        },
        updateTask:(state, action:PayloadAction<TTask>)=>{
            state.tasks = state.tasks.map(task=> {
                if(task.id === action.payload.id){
                    task = {...action.payload}
                    console.log(task)
                }
                return task
            })
        }
    }
})

export const selectTasks = (state: RootState)=> {
    return state.todoSlice.tasks
}
export const selectFilter = (state: RootState)=> {
    return state.todoSlice.filter
}

export const {addTask, toggleCompleteState, deleteTask, updateTask} = taskSlice.actions
 
export default taskSlice.reducer