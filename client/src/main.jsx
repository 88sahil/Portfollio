import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Admin from './components/pages/Admin.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import AdminPage from './components/pages/AdminPage.jsx'
import AddProject from './components/pages/AddProject.jsx'
import Deleteproject from './components/pages/deleteproject.jsx'
let routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/admin',
    element:<Admin/>
  },{
    path:'/adminpage',
    element:<AdminPage/>,
    children:[{
      path:'/adminpage/addproject',
      element:<AddProject/>
    },{
      path:"/adminpage/deleteproject",
      element:<Deleteproject/>
    }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
