import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import "./Admin.css"
const Admin = () => {
  const [student,setStudent]=useState([])
  const [teacher,setTeacher]=useState([])
  const [course,setCourse]=useState([])


  useEffect(()=>{
    fetch("http://localhost:8000/api/user/teacherlist").then(res=>res.json()).then(data=>setTeacher(data.data))
   },[])


  useEffect(()=>{
     fetch("http://localhost:8000/api/user/studentlist").then(res=>res.json()).then(data=>setStudent(data.data))  
    },[])

    useEffect(()=>{
      fetch("http://localhost:8000/api/course/list").then(res=>res.json()).then(data=>setCourse(data.data))  
     },[])



  return (
    <div>
        <NavBarAfterLogin/>
        <div className='admin_main'>
          <div className='flex'>
          {/* student list */}
              <div>
              <div className='group'>
                <h3>Student List</h3>
                <Button variant="outlined">Add Student</Button>
              </div>
              <div className='grid'>
                    {
                      student.map(student => (
                        <div className='sub_div'>
                          <h3>Name:{student.name}</h3>
                          <h3>Email:{student.email}</h3>
                        </div>
                    ))
                  }
              </div>
              </div>

              {/* Teacher List */}
              <div>

              <div className='group'>
                <h3>Teacher List</h3>
                <Button variant="outlined">Add Teacher</Button>
              </div>
             

              <div className='grid'>
                    {
                      teacher.map(student => (
                        <div className='sub_div'>
                          <h3>Name:{student.name}</h3>
                          <h3>Email:{student.email}</h3>
                        </div>
                    ))
                  }
              </div>
              </div>
              {/* courses list */}


              <div>
              <div className='group'>
                <h3>Course List</h3>
                <Button variant="outlined">Add Course</Button>
              </div>
              <div className='grid'>
                    {
                      course.map(course => (
                        <div className='sub_div'>
                          <h3>Name:{course.name}</h3>
                          <h3>info:{course.description}</h3>
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

export default Admin