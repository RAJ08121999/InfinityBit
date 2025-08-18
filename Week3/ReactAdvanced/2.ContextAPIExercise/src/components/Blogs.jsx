import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'


const Blogs = () => {
    // consuming data through useContext hook
    const{posts,loading}=useContext(AppContext)
    return (
        <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col justify-center items-center gap-y-7 mt-[65px] mb-[70px]'>
            {
                loading ? 

                (<Spinner/>) : 
                (
                    posts.length === 0 ? 
                    (
                        <p>No Post Found</p>
                    ):
                    (
                        posts.map ( (post)=>(
                            <div key={post.id}>
                                <p className='font-bold text-lg'>
                                    {post.title}
                                </p>
                                <p className='text-sm mt-[4px]'>
                                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                                </p>
                                <p className='text-sm mt-[4px]'>
                                    Posted on : {post.date}
                                </p>
                                <p className='text-md mt-[15px]'>
                                    {post.content}
                                </p>
                                <div className='flex gap-x-3'>
                                    {post.tags.map((tag,index)=>{
                                        return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag }`}</span>
                                    })}
                                </div>

                            </div>
                        ))
                    )
                )
            }
        </div>
    )
}

export default Blogs
