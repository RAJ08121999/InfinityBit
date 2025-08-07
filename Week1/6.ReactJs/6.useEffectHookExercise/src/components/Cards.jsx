import React, { useState } from 'react'
import Card from './Card';

function Cards({courses,category}) {

    //it returns a list of all courses received from the api
    //2 forEach loop lagega qki pehle loop se category array milega 2nd loop se course data

    const[likedCourses,setLikedCourses] = useState([]);

    function getCourses (){
        // agar category all hai to pura array show karna hai
        if(category=="All"){
            let allCourses =[];

            Object.values(courses).forEach(array =>{
                array.forEach(courseData =>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //nahi to specific category k array hi show karna hai
            return courses[category];
        }
    }


    return (
        <div className='flex flex-wrap justify-center items-center gap-4'>

            {
                
                (
                    getCourses().map( (course) =>  {
                    return <Card key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                    })
                )
            }

        </div>
    )
}

export default Cards
