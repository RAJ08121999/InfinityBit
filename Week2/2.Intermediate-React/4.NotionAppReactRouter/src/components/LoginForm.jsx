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
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changehandler}
                    placeholder='Enter Email Id:'
                    name="email"
                />
            </label>

            <label>
                <p>
                    Password <sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword?("text"):("password")}
                    value={formData.password}
                    onChange={changehandler}
                    placeholder='Enter Password:'
                    name="password"
                />
                <span onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                    {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

                <NavLink to='#'>
                    <p>
                        Forgot Password
                    </p>
                </NavLink>
            </label>

            <button>Log In</button>
        </form>
    )
}

export default LoginForm
