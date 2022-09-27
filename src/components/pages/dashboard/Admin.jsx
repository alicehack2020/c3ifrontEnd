import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import "./Admin.css"
const Admin = () => {
  const [student,setStudent]=useState([])
  const [teacher,setTeacher]=useState([])
  const [course,setCourse]=useState([])
  
  // const {id,courses}=JSON.parse(localStorage.getItem("user"))


  const navigate=useNavigate()

  useEffect(()=>{
    fetch("http://localhost:8000/api/user/teacherlist").then(res=>res.json()).then(data=>setTeacher(data.data))
   },[])


  useEffect(()=>{
     fetch("http://localhost:8000/api/user/studentlist").then(res=>res.json()).then(data=>setStudent(data.data))  
    },[])

    useEffect(()=>{
      fetch("http://localhost:8000/api/course/list").then(res=>res.json()).then(data=>setCourse(data.data))  
     },[])






     const sendToteacher=()=>{
        navigate("/admin/addteacher")
     }

     const sendTostudent=()=>{
      navigate("/admin/addstudent")
   }


     const sendToCourse=()=>{
      navigate("/admin/addcourse")
   }

   const goToVideoList=(id)=>{
    navigate("/admin/videolist/"+id)
   }

const deleteUser=(userid)=>{
 const data={user_Id:userid}
// POST request using fetch()
fetch("http://localhost:8000/api/user/deleteUser", {
	method: "DELETE",
	body: JSON.stringify(data),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
.then(response => response.json())
.then(json =>handdleError(json)); 
}

const handdleError=(json)=>{
  var status=json.status
    if(status==="failed")
    {
      alert(json.message)
       
    }
    else
    {
      fetch("http://localhost:8000/api/user/teacherlist").then(res=>res.json()).then(data=>setTeacher(data.data))
      fetch("http://localhost:8000/api/user/studentlist").then(res=>res.json()).then(data=>setStudent(data.data))  
    }
}




const deleteCourse=(courseid)=>{
  const data={course_Id:courseid}
 // POST request using fetch()
 fetch("http://localhost:8000/api/course/deleteCourse", {
   method: "DELETE",
   body: JSON.stringify(data),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
   }
 })
 .then(response => response.json())
 .then(json =>handdleError2(json)); 
 }


 const handdleError2=(json)=>{
  var status=json.status
    if(status==="failed")
    {
      alert(json.message)
       
    }
    else
    {
      fetch("http://localhost:8000/api/course/list").then(res=>res.json()).then(data=>setCourse(data.data))  
    }
}



  return (
    <div>
        <NavBarAfterLogin/>
        <div className='admin_main'>
          <div className='flex'>
          {/* student list */}
              <div>
              <div className='group'>
                <h3>Student List</h3>
                <Button variant="outlined" onClick={sendTostudent}>Add Student</Button>
              </div>
              <div className='grid'>
                    {
                      student.map(student => (
                        <div className='sub_div'>
                          <h3>Name:{student.name}</h3>
                          <h3>Email:{student.email}</h3>
                          <Button variant='outlined' onClick={()=>deleteUser(student._id)}>delete</Button>
                        </div>
                    ))
                  }
              </div>
              </div>

              {/* Teacher List */}
              <div>

              <div className='group'>
                <h3>Teacher List</h3>
                <Button variant="outlined" onClick={sendToteacher}>Add Teacher</Button>
              </div>
             

              <div className='grid'>
                    {
                      teacher.map(student => (
                        <div className='sub_div'>
                          <h3>Name:{student.name}</h3>
                          <h3>Email:{student.email}</h3>
                          <Button variant='outlined' onClick={()=>deleteUser(student._id)}>delete</Button>
                        </div>
                    ))
                  }
              </div>
              </div>
              {/* courses list */}


              <div>
              <div className='group'>
                <h3>Course List</h3>
                <Button variant="outlined" onClick={sendToCourse}>Add Course</Button>
              </div>
              <div className='grid'>
                    {
                      course.map(course => (
                        <div className='sub_div'>
                          <h3>Name:{course.name}</h3>
                          <h3>info:{course.description}</h3>
                          <Button variant="outlined" onClick={()=>goToVideoList(course._id)}>Open</Button>
                          <Button variant='outlined' onClick={()=>deleteCourse(course._id)}>delete</Button>
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