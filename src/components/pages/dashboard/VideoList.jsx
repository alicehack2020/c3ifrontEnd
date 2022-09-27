import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import "./Admin.css"
const VideoList = () => {
  
  const [videlist,setVideoList]=useState([])
  const params=useParams()
  const course_id=params.course_id

  console.log(course_id);
  const navigate=useNavigate()

  useEffect(()=>{
 
    const data={
      course_id:course_id
    }
    // POST request using fetch()
    fetch("http://localhost:8000/api/course/videolist", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json =>setVideoList(json.data));
  },[])


  const sendToAddVideo=()=>{
    navigate("/admin/addvideo/"+course_id)
  }
 
  return (
    <div>
        <NavBarAfterLogin/>
        <div className='admin_main'>
          <div className='flex'>
         
              {/* video List */}
              <div>
              
              <div className='group'>
                <h3>Video List</h3>
                <Button variant="outlined" onClick={sendToAddVideo}>Add video</Button>
              </div>
             

              <div className='grid'>
                    {
                      videlist.map(videlist => (
                        <div className='sub_div'>
                          <h3>Name:{videlist.title}</h3>
                          <h3>Info:{videlist.info}</h3>
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

export default VideoList