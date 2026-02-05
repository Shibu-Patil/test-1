import { createBrowserRouter } from "react-router-dom";
import UserPages from "../pages/UserPages";
import DashBoard from "../pages/DashBoard";
import UpdatePage from "../pages/UpdatePage";
import DisplayUser from "../pages/DisplayUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        index: true,
        element: <UserPages />
      },
      {
        path: "update",
        element: <UpdatePage />
      },
      {
        path: "display",
        element: <DisplayUser />
      }
    ]
  }
]);

export default routes;
