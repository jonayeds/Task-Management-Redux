import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
    tagTypes:["task"],
    endpoints:(builder)=>({
        getTasks: builder.query({
            query:()=> "/tasks",
            providesTags:["task"]
        }),
        createTask: builder.mutation({
            query:(taskData)=> ({
                method:"POST",
                url:"/tasks",
                body:taskData
            }),
            invalidatesTags:["task"]
        })
    })
})

export const {useGetTasksQuery,useCreateTaskMutation} = baseApi