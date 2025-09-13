import React, { useState } from 'react'
import { userFormSchema, type FormErrors, type UserFormSchema } from './types/userform';

// type UserFormType = {
//     firstname:string;
//     lastname:string;
//     email:string;
//     age:number;
//     password:string;
//     confirmPassword:string;
//     gender:string;
//     phone:number;
// }
//with zod we don't need this 


const UserForm = () => {
    const [formData,setFormData] = useState<UserFormSchema>({
        firstname:"",
        lastname:"",
        age:0,
        email:"",
        password:"",
        confirmPassword:"",
        phone:"",
        gender:"male"
    });

    const [ error, setError] = useState<FormErrors>({})

    const changeInputHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === "age" ? (value ? Number(value) : 0 ) : value,
        });

        setError((prev)=> ({...prev,[name]:undefined }));
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const result = userFormSchema.safeParse(formData);
        if(!result.success){
            setError(result.error.flatten().fieldErrors);
        }
        else{
            setError({});
            console.log(formData);
        }
        
    }
    

    return (
        <form 
            onSubmit={onSubmitHandler}
            className='w-1/2 mx-auto shadow-2xl p-4'>

            <h1 className="text-2xl font-bold text-center"> User Form </h1>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='firstname' >First Name</label>
                <input 
                    value={formData.firstname}
                    type='text' 
                    name='firstname'
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.firstname && (
                        <span className='text-red-500 text-sm'>{error.firstname[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='lastname' >Last Name</label>
                <input 
                    value={formData.lastname}
                    type='text' 
                    name='lastname' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.lastname && (
                        <span className='text-red-500 text-sm'>{error.lastname[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='age' >Age</label>
                <input 
                    value={formData.age}
                    type='number' 
                    name='age' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.age && (
                        <span className='text-red-500 text-sm'>{error.age[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='gender' >Gender</label>
                <select 
                    name="gender"
                    value={formData.gender}
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md py-1 px-2'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
                {
                    error.gender && (
                        <span className='text-red-500 text-sm'>{error.gender[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='email' >Email</label>
                <input 
                    value={formData.email}
                    type='text' 
                    name='email' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.email && (
                        <span className='text-red-500 text-sm'>{error.email[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='phone' >Phone</label>
                <input 
                    value={formData.phone}
                    type='text' 
                    name='phone' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.phone && (
                        <span className='text-red-500 text-sm'>{error.phone[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='password' >Password</label>
                <input 
                    value={formData.password}
                    type='password' 
                    name='password' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.password && (
                        <span className='text-red-500 text-sm'>{error.password[0]}</span>
                    )
                }
            </div>

            <div className='mb-2 flex flex-col'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input 
                    value={formData.confirmPassword}
                    type='password' 
                    name='confirmPassword' 
                    onChange={changeInputHandler}
                    className='border border-gray-500 rounded-md px-2 py-1'
                />
                {
                    error.confirmPassword && (
                        <span className='text-red-500 text-sm'>{error.confirmPassword[0]}</span>
                    )
                }
            </div>

            <button 
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-md '>
                    Submit
            </button>

        </form>
    )
}

export default UserForm
