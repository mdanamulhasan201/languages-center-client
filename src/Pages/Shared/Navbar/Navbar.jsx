import React from 'react'
import logo from '../../../../public/logo.jpeg'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'


const Navbar = () => {
   
    const navbarOptions = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/instructors'>Instructors</Link></li>
        <li className='font-bold'><Link to='/allClasses'>Classes</Link></li>
        

    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarOptions}
                        </ul>
                    </div>

                    <img className="" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <DropDown></DropDown>
                </div>
            </div>
        </>
    )
}

export default Navbar