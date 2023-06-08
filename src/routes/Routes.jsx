import { createBrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home/Home/Home'
import Main from '../layouts/Main'
import Login from '../Pages/Login/Login'
import Instructors from '../Pages/Instructors/Instructors'
import AllClasses from '../Pages/AlllClasses/AllClasses'

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
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
])
