import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return (
        <div className='flex gap-2 justify-between mx-4 '>

            <NavLink to='/'>
                <img src={logo} alt="logo" loading='lazy' className='w-[160px] h-[60px] rounded-full'></img>
            </NavLink>

            <nav>

                <ul className='flex   gap-4'>

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

            <div className='flex  gap-2 '>
                {   
                    !isLoggedIn &&
                    <NavLink to ='/login'>
                        <button>LogIn</button>
                    </NavLink>
                }
                {   
                    !isLoggedIn &&
                    <NavLink to ='/signup'>
                        <button>SignUp</button>
                    </NavLink>
                }
                {   
                    isLoggedIn &&
                    <NavLink to ='/'>
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out Successfully!");
                        }}>LogOut</button>
                    </NavLink>
                }
                {   
                    isLoggedIn &&
                    <NavLink to ='/dashboard'>
                        <button>Dashboard</button>
                    </NavLink>
                }

                {/* agar user logged in hoga to only 2 button visible hoga logout aur dashboard ka aur agar logged in nahi hoga to login aur signup ka button show hoga */}
            </div>

        </div>
    )
}

export default Navbar
