import {configureStore} from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi"
// import logger from "./middlewares/logger"
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]: baseApi.reducer
        // counter:counterReducer,
        // todoSlice:taskReducer,
        // userSlice:userSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch