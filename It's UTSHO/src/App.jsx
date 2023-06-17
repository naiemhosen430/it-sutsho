import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"
import Main from "./pages/mAIN.JSX"
import Contract from "./pages/Contract"
import About from "./pages/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contract",
        element: <Contract />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])


export default router