import React, { useState } from 'react'
import useCourseStore from '../app/courseStore'

const courseForm = () => {

    const addCourse = useCourseStore((state)=>state.addCourse)
    const [courseTitle, setCourseTitle] = useState("")
    console.log("courseForm Rendered");

    const handleCourseSubmit = () => {
        if(!courseTitle) {
            return alert("please adda a course title")
        }
        addCourse({
            id:Math.ceil(Math.random()*10000000),
            title:courseTitle
        })
        setCourseTitle("");
    }
  return (
    <div className='form-container'>
        <input type='text' 
            className='form-input' 
            value={courseTitle} 
            onChange={(e)=>{
                setCourseTitle(e.target.value)
            }}
        />
        <button 
        onClick={()=>{
            handleCourseSubmit();
        }}
        className='form-submit-btn'>
            Add Course
        </button>
    </div>
  )
}

export default courseForm
