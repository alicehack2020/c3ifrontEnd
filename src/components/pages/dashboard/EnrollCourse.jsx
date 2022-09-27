import React from 'react'
import NavBarAfterLogin from '../navbar/NavBarAfterLogin'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../Auth/Registration.css"

import { useNavigate, useParams } from 'react-router-dom';
 const EnrollCourse = () => 
 {
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
      <NavBarAfterLogin/>

      <div className="main">
        <div className='register_form'>
            <h3>Payment Form</h3>
            <TextField className='TextField' type="number" label="Enter card number" variant="outlined"   sx={{marginTop:"30px"}}/>
            <TextField className='TextField' label="Enter cvv" variant="outlined"  type="password"   sx={{marginTop:"30px",marginBottom:"30px"}}/>
            <TextField className='TextField' label="Enter Expiry Date" variant="outlined"  sx={{marginBottom:"30px"}}/>
            <Button className="Button" variant="contained" onClick={saveData} sx={{width:"20rem"}}>Enroll</Button>       
        </div>
      </div>

     
    </div>
  )
}

export default EnrollCourse