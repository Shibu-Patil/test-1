import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const DashBoard = () => {
  return (
    <div className="size-full">
        <NavBar></NavBar>
        <div className="w-full h-[calc(100%-60px)]">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default DashBoard