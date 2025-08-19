import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
    // consuming data through useContext hook
    const{posts,loading}=useContext(AppContext)
    return (
        <div className='w-11/12 max-w-[670px] py-2 flex flex-col justify-center items-center gap-y-2 mt-[20px] mb-[60px] mx-auto'>
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
                            <BlogDetails key={post.id} post={post}/>
                        ))
                    )
                )
            }
        </div>
    )
}

export default Blogs
