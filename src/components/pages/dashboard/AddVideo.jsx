import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "../Auth/Registration.css"
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAfterLogin from '../navbar/NavBarAfterLogin';

const AddVideo = () => {

  const [title,setTitle]=useState("")
  const [info,setInfo]=useState("")
  const [video_url,setVideo_url]=useState("")
  const [pdf_url,setPdf_url]=useState("")
  const [text_url,setText_url]=useState("")
  const [doc_url,setDoc_url]=useState("")

  const params=useParams()
  const course_id=params.course_id;
  const navigate=useNavigate()
  const saveData=()=>{

     
    const data={
        course_id:course_id,
        title:title,
        info:info ,
        video_url:video_url,
        pdf_url:pdf_url,
        text_url:text_url,
        doc_url:doc_url
    }


// POST request using fetch()
fetch("http://localhost:8000/api/course/addvideo", {
	method: "POST",
	body: JSON.stringify(data),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
.then(response => response.json())
.then(json =>handdleError(json));

}


const handdleError=(json)=>{
  console.log(json.status);

  var status=json.status
    if(status==="failed")
    {
      alert(json.message)
    }
    else
    {
      alert(json.message);
      navigate("/admin")
    }
}



 
  return (
    <div>
      <NavBarAfterLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter video name" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} sx={{marginTop:"60px"}}/>
            <TextField className='TextField' label="Enter video information" variant="outlined" value={info} onChange={(e)=>setInfo(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter video information" variant="outlined" value={video_url} onChange={(e)=>setVideo_url(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter video information" variant="outlined" value={pdf_url} onChange={(e)=>setPdf_url(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter video information" variant="outlined" value={text_url} onChange={(e)=>setText_url(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter video information" variant="outlined" value={doc_url} onChange={(e)=>setDoc_url(e.target.value)} sx={{marginTop:"30px"}}/>
             <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Add</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default AddVideo