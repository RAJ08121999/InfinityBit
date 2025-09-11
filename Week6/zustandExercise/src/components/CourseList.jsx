import React from 'react'
import useCourseStore from '../app/courseStore'
const CourseList = () => {
    // const { courses , removeCourse , toggleCourseStatus } = useCourseStore(
    //     (state)=>({
    //         courses: state.courses,
    //         removeCourse: state.removeCourse,
    //         toggleCourseStatus: state.toggleCourseStatus,
    //     })
    // )
    const courses = useCourseStore((state) => state.courses);
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <div>
      <ul>
        {courses.map((course , id) => {
            return (
                <React.Fragment key={course.id}>
                    <li
                        className={`course-item`}
                        style={{
                            backgroundColor:course.completed ? "green" : "red"
                        }}
                    >
                        <span className='course-item-col-1'>
                            <input
                            checked={course.completed}
                            onChange={(e)=>{
                                toggleCourseStatus(course.id)
                            }}
                            type='checkbox'
                            />
                        </span>
                        <span>
                            {course?.title}
                        </span>
                        <button 
                        onClick={()=>{
                            removeCourse(course.id)
                        }}
                        className='delete-btn'>
                            Delete
                        </button>
                    </li>
                </React.Fragment>
            )
        })}
      </ul>
    </div>
  )
}

export default CourseList
