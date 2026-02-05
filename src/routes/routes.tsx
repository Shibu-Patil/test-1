 import { createBrowserRouter } from "react-router-dom";
import UserPages from "../pages/UserPages";
import DashBoard from "../pages/DashBoard";
import UpdatePage from "../pages/UpdatePage";
import DisplayUser from "../pages/DisplayUser";

 const routes=createBrowserRouter([{
    path:"/",
    element:<DashBoard></DashBoard>,
    children:[
        {
            index:true,
            element:<UserPages></UserPages>
        },{
            path:"/update",
            element:<UpdatePage></UpdatePage>
        },{
            path:"/display",
            element:<DisplayUser></DisplayUser>
        }
    ]
 }])


 export default routes