import { createBrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import Main from '../layouts/Main'
import Login from '../Pages/Login/Login'
import Instructors from '../Pages/Instructors/Instructors'
import AllClasses from '../Pages/AlllClasses/AllClasses'
import SignUp from '../Pages/SignUp/SignUp'
import Dashboard from '../layouts/Dashboard'
import MyCart from '../Pages/DashBoard/MyCart/MyCart'
import ManageUser from '../Pages/DashBoard/Admin/ManageUser/ManageUser'
import AddClass from '../Pages/DashBoard/Instructor/AddClass/AddClass'
import ManageClas from '../Pages/DashBoard/Instructor/ManageClasses/ManageClas'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]

  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/dashboard/addClasses',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/manageClasses',
        element: <ManageClas></ManageClas>
      },
      {
        path: '/dashboard/adminmanageUser',
        element: <ManageUser></ManageUser>
      }
    ]
  }
])
