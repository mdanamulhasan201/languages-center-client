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
// import ManageClas from '../Pages/DashBoard/Instructor/ManageClasses/ManageClas'
import PrivateRoute from './PrivateRoute'
import Menu from '../Pages/DashBoard/Instructor/Menu/Menu'
import AdminMenu from '../Pages/DashBoard/Admin/AdminMenu/AdminMenu'
import AdminRoute from './AdminRoute'
import InstructorRoute from './InstructorRoute'
import Myclass from '../Pages/DashBoard/Instructor/MyClass/Myclass'
import ManageClasses from '../Pages/DashBoard/Admin/ManageClasses/ManageClasses'
import Payment from '../Pages/DashBoard/Payment/Payment'
import PaymentHistory from '../Pages/DashBoard/Payment/PaymentHistory'
import MyEnroll from '../Pages/DashBoard/Payment/MyEnroll'
import Error from '../Pages/Error/Error'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/dashboard/payment',
        element: <PrivateRoute> <Payment></Payment></PrivateRoute>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path: '/dashboard/enroll',
        element: <PrivateRoute><MyEnroll></MyEnroll></PrivateRoute>
      },
      {
        path: '/dashboard/addClasses',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: '/dashboard/menu',
        element: <InstructorRoute><Menu></Menu></InstructorRoute>
      },
      {
        path: '/dashboard/MyClasses',
        element: <PrivateRoute> <Myclass></Myclass></PrivateRoute>
      },
      {
        path: '/dashboard/adminmanageUser',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },

      {
        path: '/dashboard/adminMenu',
        element: <AdminRoute><AdminMenu></AdminMenu></AdminRoute>
      },

      {
        path: '/dashboard/ManageClasses',
        element: <ManageClasses></ManageClasses>
      }
    ]
  }
])
