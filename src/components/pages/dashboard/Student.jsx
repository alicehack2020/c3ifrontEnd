import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import "./Admin.css"
const Student = () => { 
  const [course,setCourse]=useState([])
  const [userData,setuserData]=useState([])

  const userDatalocal=JSON.parse(localStorage.getItem("user"))

  const navigate=useNavigate()

    useEffect(()=>{
      fetch("http://localhost:8000/api/course/list").then(res=>res.json()).then(data=>setCourse(data.data))  
     },[])


     useEffect(()=>{

         var data={
          user_id:userDatalocal._id
         }
          // POST request using fetch()
        fetch("http://localhost:8000/api/user/details", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json =>setuserData(json.data));
     },[])



   const goToVideoList=(course_id)=>{

    const course=userData[0].courses;
    //console.log(course);


    var flage=0
    for(var i=0;i<=course.length;i++)
    {
      if(course[i]==course_id)
      {
        flage=1
        break
      }

     // console.log(i+" "+course[i]+"    "+course_id)
    }


    if(flage==1)
    {
      navigate("/student/videolist/"+course_id)
    }
    else{
        navigate("/student/enrollcourse/"+course_id)
    }


    //navigate("/student/videolist/"+course_id)

   
   }

  return (
    <div>
        <NavBarAfterLogin/>
        <div className='admin_main'>
          <div className='flex'>
              <div>
              <div className='group'>
                <h3>Course List</h3>
               </div>
              <div className='grid'>
                    {
                      course.map(course => (
                        <div className='sub_div'>
                          <h3>Name:{course.name}</h3>
                          <h3>info:{course.description}</h3>
                          <Button variant="outlined" onClick={()=>goToVideoList(course._id)}>Open</Button>
                        </div>
                    ))
                  }
              </div>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Student