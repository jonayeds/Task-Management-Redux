import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "@/redux/features/task/taskSlice"
// import logger from "./middlewares/logger"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoSlice:taskReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch