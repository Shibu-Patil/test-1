
import { HashRouter, RouterProvider } from "react-router-dom"
import "./styles/style.css"
import routes from "./routes/routes"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
  <>
      <HashRouter>
        <RouterProvider router={routes}></RouterProvider>
      </HashRouter>
      <Toaster></Toaster>
  </>
  )
}

export default App