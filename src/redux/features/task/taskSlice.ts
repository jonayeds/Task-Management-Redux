// import { RootState } from "@/redux/store";
// import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { deleteUser } from "../user/userSlice";
export type TTask = {
    id:string,
    title:string,
    description:string,
    dueDate:string,
    priority:"High"| "Medium"| "Low",
    isCompleted:boolean,
    assignedTo:string|null
}
// interface InitialState {
//     tasks:TTask[],
//     filter:"All"|"Low"|"Medium"| "High"
// }

export type DraftTask = Pick<TTask, "title"|"description"|"dueDate"|"priority"| "assignedTo">

// const createTask = (taskData:DraftTask):TTask=>{
//     const id = nanoid()
//     return {
//         ...taskData,
//         id,
//         isCompleted:false,
//         assignedTo: taskData.assignedTo || null  
//     }
// }

// const initialState: InitialState = {
//     tasks:[{
//         id:"001",
//         title:"Github",
//         description:"Add a branch",
//         dueDate:"ed Jan 22 2025 00:00:00 GMT+0600 (Bangladesh Standard Time)",
//         isCompleted:false,
//         priority:'High',
//         assignedTo:null
//     }],
//     filter:"All"
// }
// const taskSlice = createSlice({
//     name:"task",
//     initialState,
//     reducers:{
//         addTask:(state,action: PayloadAction<DraftTask>)=>{
//             const taskData = createTask(action.payload)
//             state.tasks.push(taskData)
//         },
//         toggleCompleteState:(state, action: PayloadAction<string>)=>{
//             state.tasks.forEach((task)=>(task.id === action.payload) ? task.isCompleted = !task.isCompleted  : task )
//         },
//         deleteTask:(state, action: PayloadAction<string>)=>{
//             state.tasks = state.tasks.filter(task=> task.id !== action.payload)
//         },
//         updateTask:(state, action:PayloadAction<TTask>)=>{
//             state.tasks = state.tasks.map(task=> {
//                 if(task.id === action.payload.id){
//                     task = {...action.payload}
//                     console.log(task)
//                 }
//                 return task
//             })
//         },
//         updateFilter:(state, action:PayloadAction<"All"|"Low"|"Medium"| "High">)=>{
//             state.filter = action.payload
//         }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(deleteUser, (state, action)=>{
//             state.tasks.forEach(task=> task.assignedTo === action.payload? task.assignedTo = null: task)
//         })
//     }
// })

// // export const selectTasks = (state: RootState)=> {
// //     const filter = state.todoSlice.filter
// //     // if(filter === "Low"){
// //     //     return state.todoSlice.tasks.filter(task=>task.priority ==="Low" )
// //     // }
// //     // else if(filter === "High"){
// //     //     return state.todoSlice.tasks.filter(task=>task.priority ==="High" )
// //     // }
// //     // else if(filter === "Medium"){
// //     //     return state.todoSlice.tasks.filter(task=>task.priority ==="Medium" )
// //     // }

// //     return state.todoSlice.tasks
// // }
// export const selectFilter = (state: RootState)=> {
//     return state.todoSlice.filter
// }

// export const {addTask, toggleCompleteState, deleteTask, updateTask, updateFilter} = taskSlice.actions
 
// export default taskSlice.reducer