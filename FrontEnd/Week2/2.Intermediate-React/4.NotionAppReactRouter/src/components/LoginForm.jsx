import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setformData] = useState( {
        email:"",password:""
    })

    const[showPassword,setShowPassword]=useState(false);

    function changehandler(event){
        setformData((prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value
            })
        )
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successful!");
        navigate("/dashboard")

    }
    return (

        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>

            <label className='w-full'>

                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-500'>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changehandler}
                    placeholder='Enter Email Id:'
                    name="email"
                    className='bg-slate-800 rounded-md text-slate-100 w-full p-[12px] '
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-500'>*</sup>
                </p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changehandler}
                    placeholder='Enter Password:'
                    name="password"
                    className='bg-slate-800 rounded-md text-slate-100 w-full p-[12px] '
                />
                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                    {
                        showPassword 
                        ?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) 
                        :(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>

                <NavLink to='#'>
                    <p className='text-xs mt-1 text-blue-200 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </NavLink>
            </label>

            <button className='bg-yellow-600 rounded-lg font-medium text-slate-900 px-[12px] py-[8px] w-full mt-6'>Log In</button>
        </form>
    )
}

export default LoginForm
