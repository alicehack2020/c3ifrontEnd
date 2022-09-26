import React, { useEffect, useState } from 'react'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'

const Admin = () => {
  const [student,setStudent]=useState([])
  const [teacher,setTeacher]=useState([])


  useEffect(()=>{
    fetch("http://localhost:8000/api/user/teacherlist").then(res=>res.json()).then(data=>setTeacher(data))
   },[])


  useEffect(()=>{
     fetch("http://localhost:8000/api/user/studentlist").then(res=>res.json()).then(data=>setStudent(data))
      
    },[])



  return (
    <div>
        <NavBarAfterLogin/>
        <div>
          <div>
            <h3>Student List</h3>
                {
                  teacher.map(student => (
                   <h1>{student.name}</h1>
                ))
               }
          </div>
        </div>
    </div>
  )
}

export default Admin