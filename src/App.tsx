
import { RouterProvider } from "react-router-dom"
import "./styles/style.css"
import routes from "./routes/routes"
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
  <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
  </>
  )
}

export default App