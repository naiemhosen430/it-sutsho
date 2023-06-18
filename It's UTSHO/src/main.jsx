
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { RouterProvider } from 'react-router-dom'
import router from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <RouterProvider router={router} />
)