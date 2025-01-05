import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    name:string;
    id:string;
}

interface IInitialState {
    users:IUser[]
}

export type DraftUser= Pick<IUser, "name">

const initialState:IInitialState = {
    users:[]
}
const createUser = (payload:DraftUser)=>{
    const id = nanoid()
    console.log(payload)
    return {
        id,
        name:payload.name
    }
}

const userSlice = createSlice({
    name:"user"
,   initialState,
    reducers:{
        addUser:(state, action:PayloadAction<DraftUser>)=>{
            const user = createUser(action.payload);
            state.users.push(user)
        },
        deleteUser:(state, action:PayloadAction<string>)=>{
            state.users = state.users.filter(user=>user.id !== action.payload)
        }
    }
})

export const selectUsers= (state:RootState)=>{
    return state.userSlice
}

export const {addUser, deleteUser}  = userSlice.actions

export default userSlice.reducer