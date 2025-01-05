import App from "@/App";
import Home from "@/pages/Home";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";
import Users from "@/pages/Users";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/tasks",
                element:<Tasks/>
            },
            {
                path:"/users",
                element:<Users/>
            },
        ]
    },
    
])

export default routes