import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import { FcGoogle } from 'react-icons/fc';

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
    return (

        <div className='w-11/12 max-w-[1160px] flex justify-between  mx-auto gap-x-12 gap-y-0'>

            <div className='w-11/12 max-w-[450px]'>

                <h1 
                className='text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]'>
                    {title}
                </h1>

                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>

                    <span className='text-slate-50'>{desc1}</span>

                    <br/>

                    <span className='text-blue-200 italic'>{desc2}</span>

                </p>
                {
                    formtype==='signup'?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                
                }

                <div className='flex w-full items-center my-4 gap-x-2'>

                    <div className='h-[1px] w-full bg-slate-700'></div>

                    <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>

                    <div className='h-[1px] w-full bg-slate-700'></div>
                    
                </div>

                <button className='w-full flex justify-center items-center rounded-md font-medium text-slate-100 border border-slate-50 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>

            </div>

            <div className='w-11/12 max-w-[450px]'>
                <img src={image}
                alt='image'
                loading='lazy'
                className='rounded-[20px] bg-contain w-full h-[500px]'
                />
            </div>
        </div>
    )
}

export default Template
