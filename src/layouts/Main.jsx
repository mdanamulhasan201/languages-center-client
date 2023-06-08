
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"



const Main = () => {

  const location = useLocation();
  const hideFooterHeader = location.pathname.includes('login') ||  location.pathname.includes('signup')
  return (

    <div>
     
        <Navbar></Navbar>
      <Outlet></Outlet>
      {hideFooterHeader ||
        <Footer></Footer>}
    </div>


  )
}

export default Main
