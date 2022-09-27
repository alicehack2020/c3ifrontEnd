import React, { useState } from 'react'
import NavBarLogin from '../navbar/NavBarlogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Auth/Registration.css"

import { useNavigate, useParams } from 'react-router-dom';
 const EnrollCourse = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   
  const navigate=useNavigate()
  const params=useParams()
  const course_id=params.course_id;
  const userData=JSON.parse(localStorage.getItem("user"))
  const saveData=()=>{

    const data={
      course_id:course_id,
      user_id:userData._id
    }


// POST request using fetch()
fetch("http://localhost:8000/api/user/addcourseinuser", {
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
  var status=json.status
    if(status==="failed")
    {
      alert(json.message) 
    }
    else
    {
        navigate("/student")
    }
}

 
  
 
  return (
    <div>
      <NavBarLogin/>

      <div className="main">
        <div className='register_form'>
            <TextField className='TextField' label="Enter your email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter your password" variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginTop:"30px",marginBottom:"30px"}}/>
            <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Enroll</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default EnrollCourse