import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify'

function Card({course,likedCourses,setLikedCourses}) {

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            // pehle se liked hai to click karne par like remove karna hai
            setLikedCourses( (prev) => prev.filter( (cid)=>(cid!==course.id)))
            toast.warning("Like Removed");
        }
        else{
            //agar pehle se liked nahi hai , empty array

            // to click hone par likedCourses array me insert karo
            if(likedCourses.length ===0){
                setLikedCourses([course.id])
            }
            else{
                //non-empty array hone se previous array ko copy karke new course id ko uss array me insert karo
                setLikedCourses( (prev) => {
                    return [...prev,course.id]
                })
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden mt-4'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[2rem] h-[2rem] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>

            </div>
                

                <div className='p-4'>
                    <p className='text-white font-semibold text-lg leading-6'>

                        {
                            course.title.length>25 ? (course.title.slice(0,25)+"...") : (course.title)
                        }
                    
                    </p>

                    <p className='mt-2 text-white'>
                        {
                            course.description.length > 100 ? (course.description.slice(0,100)+"...") : (course.description)
                        }
                    </p>
                </div>
            
        </div>
        
    )
}

export default Card
