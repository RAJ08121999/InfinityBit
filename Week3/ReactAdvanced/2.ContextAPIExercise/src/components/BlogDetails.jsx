import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    return (
        <div className='mt-[50px]'>
            <NavLink to ={`/blog/${post.id}`}>
                <span className='font-bold text-xl'>{post.title}</span>
            </NavLink>
            <p>
                By <span className='italic'>{post.author}</span> on{" "}
                <NavLink to= {`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='underline text-blue-700'>{post.category}</span>
                </NavLink>
            </p>
            <p>Posted on {post.date} </p>
            <p>{post.content}</p>
            <div className='flex gap-x-3 mt-2'>
                {post.tags.map( (tag,index)=>(
                    <NavLink 
                    key={index}
                    to={`/tags/${tag.replaceAll(" ","-")}`}
                    className='text-blue-700 underline font-bold text-xs'
                    >
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails
