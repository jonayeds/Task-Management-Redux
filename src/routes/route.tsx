import App from "@/App";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";

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
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
])

export default routes