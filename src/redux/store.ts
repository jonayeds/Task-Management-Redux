import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "@/redux/features/task/taskSlice"
import userSlice from "@/redux/features/user/userSlice"
// import logger from "./middlewares/logger"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoSlice:taskReducer,
        userSlice:userSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch