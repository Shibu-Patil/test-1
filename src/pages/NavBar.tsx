import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
   <nav  className="h-15 w-full bg-black text-white flex sticky top-0 left-0">
        <aside  className="grow-4 "></aside>
        <aside className="grow flex justify-end items-center gap-20 px-10">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "text-yellow-300" : "text-white"}
                      font-bold relative
                          before:content-['']
                          before:absolute
                          before:left-0
                          before:bottom-0
                          before:h-px
                          before:w-0
                          before:bg-linear-to-r
                          before:from-red-500
                          before:to-orange-400
                          before:transition-all
                          before:duration-300
                          hover:before:w-full`
                  }
                >
                  Create
                </NavLink>
                <NavLink
                  to="/display"
                  className={({ isActive }) =>
                    `${isActive ? "text-yellow-300" : "text-white"}
                      font-bold relative
                          before:content-['']
                          before:absolute
                          before:left-0
                          before:bottom-0
                          before:h-px
                          before:w-0
                          before:bg-linear-to-r
                          before:from-red-500
                          before:to-orange-400
                          before:transition-all
                          before:duration-300
                          hover:before:w-full`
                  }
                >
                  Display
                </NavLink>    
        </aside>
   </nav>
  )
}

export default NavBar