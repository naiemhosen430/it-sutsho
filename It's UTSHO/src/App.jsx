import { createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home"

import Contract from "./pages/Contract"
import About from "./pages/About"
import Main from "./pages/Main"

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