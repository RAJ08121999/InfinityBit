import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setformData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [accountType,setAccountType ]= useState("student");
    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false);


    function changeHandler(event){
        setformData((prevData)=>(
            {
            ...prevData,
            [event.target.name]:event.target.value
            })
        )
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("Password not matched!!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created!");
        navigate("/login");
    }

    return (

        
        <div className='flex flex-col w-full'>

            <div className='flex bg-slate-800 rounded-full p-1 gap-x-1 my-6 max-w-max'>

                {/* Student instructor button */}
                <button
                className={`${accountType==="student"
                ? "bg-slate-950 text-slate-100"
                : "bg-transparent text-slate-400"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setAccountType("student");
                }}
                >
                    Student
                </button>

                <button
                className={`${accountType==="instructor"
                ?"bg-slate-950 text-slate-100"
                :"bg-transparent text-slate-400"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setAccountType("instructor");
                }}
                >
                    Instructor
                </button>
            </div>
            
            <form className='w-full'
            onSubmit={submitHandler}>
                
                {/* First Name & Last Name */}
                <div className='flex gap-x-4 mt-[10px]'>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-slate-800 rounded-md text-slate-100 w-full p-[7px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className='bg-slate-800 rounded-md text-slate-100 w-full p-[7px]'
                        />
                    </label>
                </div>

                {/* Email Address */}
                <div className='w-full mt-[10px]'>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type='email'
                            name="email"
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-slate-800 rounded-md text-slate-100 w-full p-[7px]'
                        />
                    </label>

                </div>
                
                {/* Create & Confirm Password */}
                <div className='flex gap-x-4 mt-[10px]'>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type={showPassword?("text"):("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-slate-800 rounded-md text-slate-100 w-full p-[7px]'
                        />
                            <span
                                className='absolute right-3 top-[38px] cursor-pointer'
                                onClick={()=>{
                            setShowPassword((prev)=>!prev)
                            }}>
                            {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword?("text"):("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-slate-800 rounded-md text-slate-100 w-full p-[7px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                                onClick={()=>{
                                    setShowConfirmPassword((prev)=>!prev)
                            }}>
                            {showConfirmPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                        </span>
                    </label>

                </div>

                <button className='bg-yellow-600 rounded-lg font-medium text-slate-900 px-[12px] py-[8px] w-full mt-6'>
                    Create Account
                </button>
                
            </form>
            
        </div>
    )
}

export default SignupForm
