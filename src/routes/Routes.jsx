import { createBrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import Main from '../layouts/Main'
import Login from '../Pages/Login/Login'
import Instructors from '../Pages/Instructors/Instructors'
import AllClasses from '../Pages/AlllClasses/AllClasses'
import SignUp from '../Pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'

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
        element: <PrivateRoute><AllClasses></AllClasses></PrivateRoute>
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
])
