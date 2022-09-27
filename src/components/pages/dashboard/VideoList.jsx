import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import "./Admin.css"
import "./VideoList.css"
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

  const sendToWeb=(url)=>{
    if(url=="")
    {
      alert("not available")
    }
    else
    {
      //window.location = url;
      window.open(url);
      //<Link to={url}></Link>
      //navigate(url)
    }
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
             

              <div className='gride_video_list'>
                    {
                      videlist.map(videlist => (
                        <div className='sub_div'>
                          <h3>Name:{videlist.title}</h3>
                          <h3>Info:{videlist.info}</h3>
                          <img className='banner' src={videlist.image_url} alt="" />
                            
                            <div>
                               <Button variant='outlined' onClick={()=>sendToWeb(videlist.video_url)}>Video</Button>
                               <Button variant='outlined' onClick={()=>sendToWeb(videlist.pdf_url)}>pdf</Button>
                               <Button variant='outlined' onClick={()=>sendToWeb(videlist.doc_url)}>doc</Button>
                               <Button variant='outlined' onClick={()=>sendToWeb(videlist.text_url)}>text</Button>
                            </div>
                              
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