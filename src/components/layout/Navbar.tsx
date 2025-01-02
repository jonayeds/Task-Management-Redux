import { Link } from "react-router-dom"
import { ModeToggle } from "../mode-toggle"

const Navbar = ()=>{
    return ( 
        <nav className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-5 py-2">
            <div className="flex items-center">
                <h1 className="text-4xl">Task manager</h1>
            </div>
            <div className="flex items-center gap-5">
                <Link to={"/"}>Home</Link>
                <Link to={"/tasks"}>Tasks</Link>
                <Link to={"/login"}>Login</Link>
            </div>
            <div>
                <ModeToggle/>
            </div>
        </nav>
    )
}
export default Navbar