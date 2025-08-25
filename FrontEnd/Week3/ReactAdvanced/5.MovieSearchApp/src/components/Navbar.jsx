import React from 'react'
import logo from '../assets/logo1.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center w-full h-[60px] bg-slate-700'>

            {/* logo */}

            <img 
            src={logo}
            alt='logo'
            className='h-full w-[100px] object-cover rounded-full py-1 bg-slate-800'
            />

            {/* Home button as NavLink */}

            <NavLink
                to="/"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold text-xl transition-all duration-300 ${
                    isActive
                    ? "bg-slate-800 text-slate-100" 
                    : "bg-slate-100 text-slate-800"
                    }`
                }
            >
                Home
            </NavLink>
            
        </div>
    )
}

export default Navbar
