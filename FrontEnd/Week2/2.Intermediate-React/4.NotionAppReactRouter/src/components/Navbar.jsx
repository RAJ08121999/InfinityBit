import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-1 mx-auto'>

            <NavLink to='/'>
                <img src={logo} alt="logo" loading='lazy' className='w-[150px] h-[50px] rounded-full'></img>
            </NavLink>

            <nav>

                <ul className='flex text-slate-100 gap-x-6'>

                    <li>
                        <NavLink to = "/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/">Support</NavLink>
                    </li>
                
                </ul>

            </nav>

            <div className='flex items-center gap-x-4'>
                {   
                    !isLoggedIn &&
                    <NavLink to ='/login'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-2 border-slate-700'>Log In</button>
                    </NavLink>
                }
                {   
                    !isLoggedIn &&
                    <NavLink to ='/signup'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-2 border-slate-700'>Sign Up</button>
                    </NavLink>
                }
                {   
                    isLoggedIn &&
                    <NavLink to ='/'>
                        <button 
                        className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-2 border-slate-700'
                        onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out Successfully!");
                        }}>Log Out</button>
                    </NavLink>
                }
                {   
                    isLoggedIn &&
                    <NavLink to ='/dashboard'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-2 border-slate-700'>Dashboard</button>
                    </NavLink>
                }

                {/* agar user logged in hoga to only 2 button visible hoga logout aur dashboard ka aur agar logged in nahi hoga to login aur signup ka button show hoga */}
            </div>

        </div>
    )
}

export default Navbar
