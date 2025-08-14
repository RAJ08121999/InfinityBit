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

    const[showPassword,setShowPassword]=useState(false);



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

        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                
                {/* First Name & Last Name */}
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                        />
                    </label>
                </div>

                {/* Email Address */}
                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name="email"
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    />
                </label>

                {/* Create & Confirm Password */}
                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input
                            required
                            type={showPassword?("text"):("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                        />
                            <span onClick={()=>{
                            setShowPassword((prev)=>!prev)
                            }}>
                            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input
                            required
                            type={showPassword?("text"):("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                        />
                            <span onClick={()=>{
                            setShowPassword((prev)=>!prev)
                            }}>
                            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm
