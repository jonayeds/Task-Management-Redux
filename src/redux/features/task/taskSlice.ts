import { createSlice } from "@reduxjs/toolkit";
type Task = {
    id:string,
    title:string,
    description:string,
    dueDate:string,
    priority:"High"| "Medium"| "Low",
}
interface InitialState {
    tast:Task[],
}
const initialState = {
    task:[
        {
            id:"",
            title:"",
            description:"",
            dueDate:"",
            isCompleted:false,
            priority:"high"
        }
    ]
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{

    }
})

export default taskSlice.reducer